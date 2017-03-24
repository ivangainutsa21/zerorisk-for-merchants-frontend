import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr('string'),
  body: DS.attr('string'),
  recipientType: DS.attr('string'),
  created: DS.attr('date'),
  user: DS.belongsTo('user'),
  entity: DS.belongsTo('entity'),
  segment: DS.belongsTo('user'),
  segmentName: DS.attr('string')
});
