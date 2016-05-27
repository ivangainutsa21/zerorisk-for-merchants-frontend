import Ember from 'ember';
import Session from 'ember-simple-auth/services/session';
import moment from 'moment';
import config from './../config/environment';

export default Session.extend({
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  alerting: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  notifications: Ember.inject.service(),

  // Parameters
  sessionDuration: 15 * 60 * 1000, // 15 minutes
  sessionTimeout: null,

  // Hooks
  init() {
    this._super(...arguments);
    this._syncSessionExpiration();
    this.set('loginController', Ember.getOwner(this).lookup('controller:login'));
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

  _syncSessionExpiration() {
    if (this.get('data.timeOfLastAPIActivity') && moment().diff(this.get('data.timeOfLastAPIActivity'), 'milliseconds') > this.get('sessionDuration')) {
      this.set('data.reasonForInvalidation', 'inactivity');
      this.set('data.timeOfLastAPIActivity', false);
      this.invalidate();
    }

    Ember.run.cancel(this.syncSessionExpirationTimeout);
    this.syncSessionExpirationTimeout = Ember.run.later(this, this._syncSessionExpiration, 500);
  },

  _alertCleanAndRedirect() {
    if (this.get('data.reasonForInvalidation') === 'logout') {
      this.get('alerting').notify("You've successfully logged out.", 'success', 'bottom-right-toast');
    } else if (this.get('data.reasonForInvalidation') === 'inactivity') {
      this.get('loginController').set('error', 'You were automatically logged out due to inactivity.');
    } else {
      this.get('alerting').notify('Your session has expired. Please log back in.', 'warning', 'bottom-right-toast');
    }

    this.set('data.reasonForInvalidation', null);

    // Unloading all stores to clean last session data
    if (config['ember-cli-mirage'].enabled) {
      window.location.replace(config.baseURL);
    } else {
      this.get('store').unloadAll();
      this.get('routing').transitionTo('login');  
    }
    
  },

  _populateCurrentUser() {
    // console.log(this.get('session.authenticated'));
    let { userId } = this.get('session.authenticated');    
    return this.get('store').find('user', userId).then(user => this.get('currentUser').set('content', user) && user);
  },

  _forceEnrollment(user) {
    return new Ember.RSVP.Promise((resolve) => {      
      if (user.get('merchantStatus') === 'NotEnrolled') {
        this.get('routing').transitionTo('enrollment');
        resolve(true);
      } else {
        resolve(false);
      }
    });
  },

  // Events
  beforeApplication() {
    if (this.get('isAuthenticated')) {
      // this.get('notifications').startPolling();
      return this._populateCurrentUser().then(user => this._forceEnrollment(user));
    }
  },

  afterAuthentication() {
    this._populateCurrentUser().then(user => this._forceEnrollment(user)).then((mustCompleteEnrollment) => {
      if (!mustCompleteEnrollment) {
        if (this.get('attemptedTransition')) {
          this.get('attemptedTransition').retry();
          this.set('session.attemptedTransition', null);
        } else {
          this.get('routing').transitionTo(config['ember-simple-auth'].routeAfterAuthentication);
        }
      }
    });
  },

  afterInvalidation() {
    // this.get('notifications').stopPolling();
    Ember.run.once(this, this._alertCleanAndRedirect);
  }

});
