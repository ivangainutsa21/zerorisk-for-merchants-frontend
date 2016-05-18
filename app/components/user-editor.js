import Ember from 'ember';

export default Ember.Component.extend({
  errorParser: Ember.inject.service(),
  tagName: "form",

  cantSave: Ember.computed.alias('model.validations.isInvalid'),

  submit() {
    this.sendAction('save');
  },

  actions: {
    save() {
      this.get('model').save().then(() => {
        this.get('onComplete')();
      }).catch((response, a) => {
        console.log(response);
        console.log(a);
        this.get('errorParser').parseAndDisplay(response, 'notification');
      });
    }
  }
});
