import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import Language from '../language';

const { computed } = Ember;

export default Model.extend({
  entity: belongsTo('entity'),
  email: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  enabled: attr('boolean'),
  role: attr('string'),
  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }).readOnly(),
  humanRole: computed('role', function() {
    return Language.roles[this.get('role')];
  }).readOnly()
});
