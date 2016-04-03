import DS from 'ember-data';

export default DS.Model.extend({
  scan: DS.belongsTo('scan'),
  vulnerabilities: DS.hasMany('vulnerability'),
  scanDate: DS.attr('date'),
  provaderStatus: DS.attr('string'),
  riskAverage: DS.attr('number'),
  riskCoverage: DS.attr('number'),
  totalVulnerabilities: DS.attr('number'),
  totalPCIVulnerabilities: DS.attr('number'),
  asvProviderAsString: DS.attr('string'),
  asvProvider: DS.attr('string')  
});
