import DS from 'ember-data';
import Language from '../language';

export default DS.Model.extend({
  entityId: DS.attr('number'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  enabled: DS.attr('boolean'),
  role: DS.attr('string'),
  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }).readOnly(),
  humanRole: Ember.computed('role', function() {
    return Language.roles[this.get('role')];
  }).readOnly()
});
