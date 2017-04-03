import DS from 'ember-data';

export default DS.Model.extend({
  businessChannel: DS.attr('string'),
  customizationId: DS.attr('number'),
  email: DS.attr('string'),
  enrolledAt: DS.attr('date'),
  level: DS.attr('string'),
  mccCode: DS.attr('string'),
  merchantStatus: DS.attr('string'),
  mid: DS.attr('string'),
  pciPassed: DS.attr('boolean'),
  saqType: DS.attr('string'),
});
