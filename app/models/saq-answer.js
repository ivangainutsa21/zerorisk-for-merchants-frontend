import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

const { computed } = Ember;

export default Model.extend({
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
      case 'COMPENSATING_CONTROLS':
        return 'CC'
      default: 
        return type;
    }
  })
});
