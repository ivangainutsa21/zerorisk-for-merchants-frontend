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
  merchantStatus: attr('string'),
  merchantCustomizationId: attr('number'),
  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  humanRole: computed('role', function() {
    return Language.roles[this.get('role')];
  }),
  humanMerchantStatus: computed('merchantStatus', function() {
    let merchantStatus = this.get('merchantStatus');
    switch(merchantStatus) {
      case 'NotEnrolled': 
        return 'Not Enrolled';
      case 'NotCompliant':
        return 'Not Compliant';
      default:
        return merchantStatus;
    }
  })
});
