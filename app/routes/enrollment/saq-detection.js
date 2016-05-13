import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    if(!this.controllerFor('enrollment/user-details').get('hasCompletedStep')) {
      transition.abort();
    }
  }
});
