import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  saq: belongsTo(),
  //answer: belongsTo('saq-answer')
});
