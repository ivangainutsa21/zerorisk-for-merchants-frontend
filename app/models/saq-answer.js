import Model from 'ember-data/model';

export default Model.extend({
  question: DS.belongsTo('saq-question'),
  saq: DS.belongsTo('saq'),
  responseType: DS.attr('string')
});
