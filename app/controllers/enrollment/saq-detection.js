import Ember from 'ember';

export default Ember.Controller.extend({
  hasCompletedPreFlight: false,

  actions: {
    completePreFlight() {
      this.set('hasCompletedPreFlight', true);
    }
  }
});
