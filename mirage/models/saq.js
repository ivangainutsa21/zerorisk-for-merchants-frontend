import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  entity: belongsTo(),
  questions: hasMany('saq-question'),
  answers: hasMany('saq-answer')
});
