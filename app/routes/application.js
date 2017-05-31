import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import injectService from 'ember-service/inject';

const { set } = Ember;

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: injectService(),
  headData: injectService(),

  beforeModel() {
    this._super(...arguments);
    set(this, 'headData.title', 'Demo App');
    return this.get('session').beforeApplication(arguments[0]);
  },

  model() {
    return Ember.RSVP.hash({
      notifications: this.store.peekAll('notification')
    });
  },

  sessionAuthenticated() {
    this.get('session').afterAuthentication();    
  },

  // Overwriting 'sessionInvalidated' with a custom function to prevent location reloading and giving user custom messages
  sessionInvalidated() {
    this.get('session').afterInvalidation();
  },
});
