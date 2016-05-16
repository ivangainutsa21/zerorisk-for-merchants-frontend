import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel(transition) {
    // Temporarly disabled
    // TODO: ENABLE MEEEEE
    // if(!this.controllerFor('enrollment/user-details').get('hasCompletedStep')) {
    //   transition.abort();
    // }
  }
});
