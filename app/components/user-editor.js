import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ]
});

export default Ember.Component.extend(Validations, {
	email: null,

  cantSave: Ember.computed.alias('validations.isInvalid'),

  actions: {
    save() {
      this.get('onComplete')();
    }
  }
});
