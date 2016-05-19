import Model from 'ember-data/model';

export default Model.extend({
  answer: DS.belongsTo('saq-answer'),
  text: DS.attr('string')
});
