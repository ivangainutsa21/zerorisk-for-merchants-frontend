import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  //businessChannel: DS.attr('string'),
  // rels
  merchantProfile: belongsTo('merchant-profile'),

  // attrs
  customizationId: attr('number'),
  email: attr('string'),
  enrolledAt: attr('date'),
  level: attr('string'),
  mccCode: attr('string'),
  merchantStatus: attr('string'),
  mid: attr('string'),
  pciPassed: attr('boolean'),
  saqType: attr('string'),
});
