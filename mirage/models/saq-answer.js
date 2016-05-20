import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  question: belongsTo('saq-question'),
  saq: belongsTo()
});
