import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  entity: DS.belongsTo('entity'), // async via id
  scanReportId: DS.belongsTo('scan-report'), // async via id
  scannedIps: DS.hasMany('scanned-ip'), // embedded
  scanStart: DS.attr('date'),
  scanEnd: DS.attr('date'),
  scanReference: DS.attr('string'),
  statusAsString: DS.attr('string'),
  humanStatus: Ember.computed('statusAsString', function() {
    return this.get('statusAsString').toLowerCase();
  }),
  riskAverage: DS.attr('number'),
  riskCoverage: DS.attr('number'),
  totalVulnerabilities: DS.attr('number'),
  totalPCIVulnerabilities: DS.attr('number')
});
