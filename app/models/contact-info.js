import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
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
    validator('presence', true),
    validator('length', { min: 5, max: 20 })
  ],
  'address': validator('belongs-to')
});

export default Model.extend(Validations, {
  email: attr('string'),
  companyName: attr('string'),
  contactName: attr('string'),
  dba: attr('string'),
  title: attr('string'),
  phone: attr('string'),
  fax: attr('string'),
  address: belongsTo('address') // embedded
});
