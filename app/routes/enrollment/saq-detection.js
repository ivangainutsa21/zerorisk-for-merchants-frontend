import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  alerting: Ember.inject.service(),

  beforeModel(transition) {
    if (!this.controllerFor('enrollment/user-details').get('hasCompletedStep')) {
      transition.abort();
      this.get('alerting').notify('You must complete the user details step first!', 'info');
    }
  }
});
