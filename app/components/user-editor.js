import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ]
});

export default Ember.Component.extend(Validations, {
  tagName: "form",

	email: null,

  cantSave: Ember.computed.alias('validations.isInvalid'),

  submit() {
    this.sendAction('save');
  },

  actions: {
    save() {
      this.get('onComplete')();
    }
  }
});
