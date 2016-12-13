import Ember from 'ember';

export default Ember.Component.extend({
  errorParser: Ember.inject.service(),
  tagName: "form",

  isLoading: false,

  cantSave: Ember.computed.alias('model.validations.isInvalid'),

  submit() {
    this.sendAction('save');
  },

  actions: {
    save() {
      this.set('isLoading', true);
      this.get('model').save().then(() => {
        this.set('isLoading', false);
        this.get('onComplete')();
      }).catch((response) => {
        this.set('isLoading', false);
        this.get('errorParser').parseAndDisplay(response, 'notification');
      });
    }
  }
});
