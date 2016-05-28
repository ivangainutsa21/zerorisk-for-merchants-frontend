import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service(),

  beforeModel() {
    this._super(...arguments);
    return this.get('session').beforeApplication();
  },

  model() {
    return Ember.RSVP.hash({
      notifications: this.store.peekAll('notification')
    });
  },

  // sessionAuthenticated() {
  //   this.get('session').afterAuthentication();
  // },

  // Overwriting 'sessionInvalidated' with a custom function to prevent location reloading and giving user custom messages
  sessionInvalidated() {
    this.get('session').afterInvalidation();
  },
});
