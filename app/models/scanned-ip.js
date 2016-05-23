import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';


export default Model.extend({
  scan: belongsTo('scan'),
  ipNumber: attr('string'),
  hostName: attr('string'),
  tag: attr('string'),
  description: attr('string')
});
