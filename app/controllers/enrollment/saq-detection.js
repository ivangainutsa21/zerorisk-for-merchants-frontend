import Ember from 'ember';

export default Ember.Controller.extend({
  hasCompletedPreFlight: false,

  actions: {
    completePreFlight() {
      this.set('hasCompletedPreFlight', true);
    },
    unlockApplication() {
      // test this.set('currentUser.merchantStatus', 'Enrolled')
      this.set('currentUser.merchantStatus', 'Enrolled');
    }
  }
});
