import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  saq: belongsTo('saq'),
  question: belongsTo('saq-question'),
  responseType: attr('string'),
  notApplicable: attr('string'),
  code: attr('string'),
  constraints: attr('string'),
  definition: attr('string'),
  maintenance: attr('string'),
  objective: attr('string'),
  risks: attr('string'),
  validation: attr('string')
});
