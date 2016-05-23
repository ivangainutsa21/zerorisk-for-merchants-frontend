import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

const { computed } = Ember;

export default Model.extend({
  entity: belongsTo('entity'), // async via id
  scanReportId: belongsTo('scan-report'), // async via id
  scannedIps: hasMany('scanned-ip'), // embedded
  scanStart: attr('date'),
  scanEnd: attr('date'),
  scanReference: attr('string'),
  statusAsString: attr('string'),
  humanStatus: computed('statusAsString', function() {
    return this.get('statusAsString').toLowerCase();
  }),
  riskAverage: attr('number'),
  riskCoverage: attr('number'),
  totalVulnerabilities: attr('number'),
  totalPCIVulnerabilities: attr('number')
});
