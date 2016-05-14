import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    // Temporarly disabled
    // TODO: ENABLE MEEEEE
    // if(!this.controllerFor('enrollment/user-details').get('hasCompletedStep')) {
    //   transition.abort();
    // }
  }
});
