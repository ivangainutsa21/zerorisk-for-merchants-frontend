import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

const { computed } = Ember;

export default Model.extend({
  entity: belongsTo('entity'),
  questions: hasMany('saq-question'),
  answers: hasMany('saq-answer'),
  description: attr('string'),
  type: attr('string'),
  version: attr('string'),
  progress: attr('number'),
  startDate: attr('date'),
  endDate: attr('date'),
  isDraft: attr('boolean'),
  status: attr('string'),
  isDraft: computed('status', function () {
    return this.get('status') === 'draft';
  }),
  isSubmitted: computed('status', function () {
    return this.get('status') === 'submitted';
  }),
  humanType: computed('type', function() {
    return this.get('type').replace('_', ' ');
  })
});
