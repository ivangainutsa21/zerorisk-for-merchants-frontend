import Ember from 'ember';

export default Ember.Controller.extend({
  hasCompletedPreFlight: false,

  actions: {
    completePreFlight() {
      this.set('hasCompletedPreFlight', true);
    },
    unlockApplication() {
    	this.get('currentUser').set('hasCompletedEnrollment', true);
    }
  }
});
