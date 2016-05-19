import Model from 'ember-data/model';

export default Model.extend({
  entity: DS.belongsTo('entity'),
  questions: DS.hasMany('saq-question'),
  answers: DS.hasMany('saq-answer'),
  description: DS.attr('string')
});
