import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  entityId: DS.belongsTo('entity'),
  vulnerabilities: DS.hasMany('vulnerability'),
  ipNumber: DS.attr('string'),
  hostName: DS.attr('string'),
  tag: DS.attr('string'),
  description: DS.attr('string'),
  riskAverage: DS.attr('number'),
  riskCoverage: DS.attr('number'),
  totalVulnerabilities: DS.attr('number'),
  totalPCIVulnerabilities: DS.attr('number'),
  status: DS.attr('string'),
  humanStatus: Ember.computed('status', function() {
    switch (this.get('status')) {
      case "PASS":
        return "Not Scanned";
      case "NOT_SCANNED":
        return "Not Scanned";
      case "FAIL":
        return "Fail";
      default:
        return "Unknown";
    }
  }),
  PCIStatus: DS.attr('string'),
  humanPCIStatus: Ember.computed('status', function() {
    switch (this.get('status')) {
      case "PASS":
        return "pass";
      case "NOT_SCANNED":
        return "not scanned";
      case "FAIL":
        return "fail";
      default:
        return "unknown";
    }
  }),
  isNotExpired: DS.attr('boolean')
});
