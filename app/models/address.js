import Ember from 'ember';
import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  businessAddress: {
    description: 'Business Address',
    validators: [
      validator('length', { min: 1, max: 30 })
    ]
  },
  city: {
    description: 'City',
    validators: [
      validator('length', { min: 1, max: 30 })
    ]
  },

  stateProvince: {
    description: "State/Province",
    validators: [      
      validator('length', { min: 1, max: 30 })
    ]
  },
  country: {
    description: 'Country',
    validators: [
      validator('length', { min: 1, max: 30 })
    ]
  },
  zipCode: {
    description: "ZIP Code",
    validators: [
      validator('length', { min: 1, max: 30 })
    ]
  },
  url: {
    description: "URL",
    validators: [
      validator('format', { type: 'url' }),
      validator('length', { min: 3, max: 30 })
    ]
  }
});

export default DS.Model.extend(Validations, {
  tag: DS.attr('string'),
  group: DS.attr('string', { defaultValue: 'World' }),
  lat: DS.attr('number'),
  lng: DS.attr('number'),
  businessAddress: DS.attr('string'),
  city: DS.attr('string'),
  stateProvince: DS.attr('string'),
  country: DS.attr('string'),
  zipCode: DS.attr('string'),
  url: DS.attr('string'),
  composedAddress: Ember.computed('businessAddress', function () {
    if (this.get('businessAddress') && this.get('zipCode')) {
      return this.get('businessAddress') + ', ' + this.get('zipCode') + ' ' + this.get('city') + ', ' + this.get('country');
    } else if (this.get('businessAddress')) {
      return this.get('businessAddress') + ', ' + this.get('city') + ', ' + this.get('country');
    }
  })
});
