import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  answer: belongsTo('saq-answer'),
  saq: belongsTo('saq'),
  text: attr('string'),
  type: attr('string'),
  section: attr('string'),
  milestone: attr('string'),
  code: attr('string')
});
