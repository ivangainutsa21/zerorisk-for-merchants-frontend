import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  companyName: [
    validator('presence', true),
    validator('length', { min: 3, max: 30 })
  ],
  contactName: [
    validator('presence', true),
    validator('length', { min: 3, max: 30 })
  ],
  dba: [
    validator('length', { min: 3, max: 30 })
  ],
  title: [
    validator('length', { min: 1, max: 30 })
  ],
  phone: [
    validator('format', { allowBlank: true, type: 'phone' }),
    validator('length', { min: 3, max: 30 })
  ],
  'address': validator('belongs-to')
});

export default DS.Model.extend(Validations, {
  email: DS.attr('string'),
  companyName: DS.attr('string'),
  contactName: DS.attr('string'),
  dba: DS.attr('string'),
  title: DS.attr('string'),
  phone: DS.attr('string'),
  fax: DS.attr('string'),
  address: DS.belongsTo('address') // embedded
});
