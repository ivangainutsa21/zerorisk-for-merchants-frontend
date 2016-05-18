import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  businessAddress: [
    validator('length', { min: 3, max: 30 })
  ],
  city: [
    validator('length', { min: 1, max: 30 })
  ],
  stateProvince: [
    validator('presence', true),
    validator('length', { min: 1, max: 30 })
  ],
  country: [
    validator('length', { min: 3, max: 30 })
  ],
  zipCode: [
    validator('length', { min: 2, max: 30 })
  ],
  url: [
    validator('format', { type: 'url' }),
    validator('length', { min: 3, max: 30 })
  ]
});

export default DS.Model.extend(Validations, {
  businessAddress: DS.attr('string'),
  city: DS.attr('string'),
  stateProvince: DS.attr('string'),
  country: DS.attr('string'),
  zipCode: DS.attr('string'),
  url: DS.attr('string')
});
