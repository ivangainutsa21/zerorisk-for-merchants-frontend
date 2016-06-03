import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';
import config from '../config/environment';

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
  status: attr('string'),
  isDraft: computed('status', function () {
    return this.get('status') === 'DRAFT';
  }),
  isSubmitted: computed('status', function () {
    return this.get('status') === 'SUBMITTED';
  }),
  humanType: computed('type', function() {
    return this.get('type').replace('_', ' ');
  }),
  download() {
    let url = config.environment === 'development' ? `http://localhost:8080/api/v2/merchant/saqs/${this.get('id')}/download` : `api/v2/merchant/saqs/${this.get('id')}/download`;
    return Ember.$('<iframe>', { src: url }).hide().appendTo('body');
  }
});
