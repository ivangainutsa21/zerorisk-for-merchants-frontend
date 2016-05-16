/*global Materialize */
import Ember from 'ember';
import Session from 'ember-simple-auth/services/session';
import Language from '../language';
import moment from 'moment';
import config from './../config/environment';


export default Session.extend({
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  alerting: Ember.inject.service(),
  currentUser: Ember.inject.service(),

  sessionDuration: 15 * 60 * 1000, // 15 minutes
  sessionTimeout: null,


  init() {
    this._super(...arguments);
    this._syncSessionExpiration();
    console.log(config);
  },

  // Methods
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
    const { id } = this.get('session.authenticated');
    return this.store.find('user', id)
      .then(user => this.get('currentUser').set('content', user) && user);
    }
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

  alertCleanAndRedirect() {
    if (this.get('data.reasonForInvalidation') === 'logout') {
      this.get('alerting').notify("You've successfully logged out.", 'success', 'stand-alone');
    } else {
      this.get('alerting').notify('Your session has expired. Please log back in.', 'warning', 'stand-alone');
    }
    this.set('data.reasonForInvalidation', null);
    // Unloading all stores to clean last session data
    this.get('store').unloadAll();
    this.get('routing').transitionTo('login');
  },

  // Events
  afterAuthentication() {
    this._populateCurrentUser().then( user => {
      if (this.get('attemptedTransition')) {
        this.get('attemptedTransition').retry();
        this.set('session.attemptedTransition', null);
      } else {
        this.get('routing').transitionTo(config['ember-simple-auth'].routeAfterAuthentication);
      }
    });
  },

  afterInvalidation() {
    Ember.run.once(this, this.alertCleanAndRedirect);
  }

});
