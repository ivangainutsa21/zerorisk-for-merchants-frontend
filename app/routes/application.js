import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service(),

  beforeModel() {
    if(this.get('session.isAuthenticated')) {
      return this.get('session')._populateCurrentUser();
    }
  },
  // Overwriting 'sessionInvalidated' with a custom function to prevent location reloading and giving user custom messages
  sessionInvalidated() {
    this.get('session').afterInvalidation();
  }
});
