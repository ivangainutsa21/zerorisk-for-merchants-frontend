import DS from 'ember-data';

export default DS.Model.extend({
  entityId: DS.attr('number'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});
