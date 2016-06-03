import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { validator, buildValidations } from 'ember-cp-validations';

const { computed } = Ember;

const Validations = buildValidations({
  notApplicable: validator('presence', true),
  constraints: validator('presence', true),
  definition: validator('presence', true),
  maintenance: validator('presence', true),
  objective: validator('presence', true),
  risks: validator('presence', true),
  validation: validator('presence', true)
});

export default Model.extend(Validations, {
  saq: belongsTo('saq'),
  question: belongsTo('saq-question'),
  type: attr('string'),
  notApplicable: attr('string'),
  code: attr('string'),
  constraints: attr('string'),
  definition: attr('string'),
  maintenance: attr('string'),
  objective: attr('string'),
  risks: attr('string'),
  validation: attr('string'),
  shortType: computed('type', function() {
    let type = this.get('type');
    switch(type) {
      case 'YES':
        return 'Y';
      case 'NO':
        return 'N';
      case 'NOT_APPLICABLE':
        return 'N/A';
      case 'COMPENSATING':
        return 'CC';
      default: 
        return type;
    }
  })
});
