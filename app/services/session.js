/*global Materialize */
import Ember from 'ember';
import Session from 'ember-simple-auth/services/session';
import Language from '../language';
import moment from 'moment';

export default Session.extend({
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  sessionDuration: 15 * 60 * 1000, // 15 minutes
  sessionTimeout: null,

  currentUser: Ember.Object.create(),

  // currentUser: Ember.computed('session.authenticated', function() {
  //   let currentUser = this.get('session.authenticated');
  //   currentUser.humanRole = Language.roles[currentUser.role];
  //   return currentUser;
  // }),

  init() {
    this._super(...arguments);
    this._syncSessionExpiration();
  },

  logout() {
    // Setting session data var to inform the 'sessionInvalidated' that the reason for invalidation is requested logout from user
    this.set('data.reasonForInvalidation', 'logout');
    this.invalidate();
  },

  setTimeOfLastAPIActivity() {
    this.set('data.timeOfLastAPIActivity', new Date());
  },

  _populateCurrentUser() {
    console.log(this.get('session.authenticated'));
    const { email } = this.get('session.authenticated');
    this.get('currentUser').set('content', email);
    return Ember.RSVP.resolve();
  },

  _syncSessionExpiration() {
    if (this.get('data.timeOfLastAPIActivity') && moment().diff(this.get('data.timeOfLastAPIActivity'), 'milliseconds') > this.get('sessionDuration')) {
      this.set('data.timeOfLastAPIActivity', false);
      this.invalidate();
    }

    Ember.run.cancel(this.syncSessionExpirationTimeout);
    this.syncSessionExpirationTimeout = Ember.run.later(this, this._syncSessionExpiration, 500);
  },

  afterAuthentication() {
    this._populateCurrentUser().then( user => {
      if (this.get('attemptedTransition')) {
        this.get('attemptedTransition').retry();
      } else {
        this.get('routing').transitionTo('dashboard');
      }
    });
  },

  afterInvalidation() {
    Ember.run.once(this, this.alertCleanAndRedirect);
  },

  alertCleanAndRedirect() {
    if (this.get('data.reasonForInvalidation') === 'logout') {
      console.log('You\'ve successfully logged out.', 4000);
    } else {
      console.log('Your session has expired. Please log back in.', 4000);
    }
    this.set('data.reasonForInvalidation', null);
    // Unloading all stores to clean last session data
    this.get('store').unloadAll();
    this.get('routing').transitionTo('login');
  }
});
