import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

const { computed } = Ember;

export default Model.extend({
  answer: belongsTo('saq-answer'),
  saq: belongsTo('saq'),
  text: attr('string'),
  type: attr('string'),
  section: attr('string'),
  sectionNumber: computed('code', function () {
    const code = this.get('code');
    return code.substr(0, code.indexOf('.'));
  }),
  milestone: attr('string'),
  code: attr('string'),
  testing: attr('string'),
  info: attr('string')
});
