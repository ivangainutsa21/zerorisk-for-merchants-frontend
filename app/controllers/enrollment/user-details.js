import Ember from 'ember';

export default Ember.Controller.extend({
  hasCompletedStep: false,

  actions: {
    goToNextStep() {
      this.set('hasCompletedStep', true);
      this.transitionToRoute('enrollment.saq-detection');
    }
  }
});
