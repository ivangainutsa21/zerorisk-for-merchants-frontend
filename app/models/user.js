import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

const { computed } = Ember;

export default Model.extend({
  entities: hasMany('entity'),
  email: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  enabled: attr('boolean'),
  roles: attr(),
  privileges: attr(),
  title: attr('string'),
  tcAccepted: attr('boolean'),
  merchantStatus: attr('string'),
  merchantCustomizationId: attr('number'),
  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  // humanMerchantStatus: computed('merchantStatus', function() {
  //   let merchantStatus = this.get('merchantStatus');
  //   switch(merchantStatus) {
  //     case 'NotEnrolled': 
  //       return 'Not Enrolled';
  //     case 'NotCompliant':
  //       return 'Not Compliant';
  //     default:
  //       return merchantStatus;
  //   }
  // }),

  // Customizations
  isUnbranded: computed('merchantCustomizationId', function() {
    return this.get('isIngenico');
  }),

  hasCustomization: computed('merchantCustomizationId', function() {
    return this.get('merchantCustomizationId') !== 1;
  }),

  isIngenico: computed('merchantCustomizationId', function() {
    return this.get('merchantCustomizationId') === 2;
  }),

  isBancaSella: computed('merchantCustomizationId', function() {
    return this.get('merchantCustomizationId') === 3;
  }),

  isGenericDemo: computed('merchantCustomizationId', function() {
    return this.get('merchantCustomizationId') === 4;
  }),

  // Wizard
  enrollmentWizardId: computed('isIngenico', 'isBancaSella', function() {
    if(this.get('isIngenico')) {
      return 3;
    } else if(this.get('isBancaSella')) {
      return 4;
    }
    return 1;
  })
});
