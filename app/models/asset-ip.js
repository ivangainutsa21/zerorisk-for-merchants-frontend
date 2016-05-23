import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

const { computed } = Ember;

export default Model.extend({
  entity: belongsTo('entity'), // async via id
  vulnerabilities: hasMany('vulnerability'), // embedded
  ipNumber: attr('string'),
  hostName: attr('string'),
  tag: attr('string'),
  description: attr('string'),
  riskAverage: attr('number'),
  riskCoverage: attr('number'),
  totalVulnerabilities: attr('number'),
  totalPCIVulnerabilities: attr('number'),
  status: attr('string'),
  humanStatus: computed('status', function() {
    switch (this.get('status')) {
      case 'PASS':
        return 'Not Scanned';
      case 'NOT_SCANNED':
        return 'Not Scanned';
      case 'FAIL':
        return 'Fail';
      default:
        return 'Unknown';
    }
  }).readOnly(),
  PCIStatus: attr('string'),
  humanPCIStatus: computed('status', function() {
    switch (this.get('status')) {
      case 'PASS':
        return 'pass';
      case 'NOT_SCANNED':
        return 'not scanned';
      case 'FAIL':
        return 'fail';
      default:
        return 'unknown';
    }
  }).readOnly(),
  isNotExpired: attr('boolean')
});
