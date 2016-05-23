import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  scan: belongsTo('scan'), 
  vulnerabilities: hasMany('vulnerability'), // embedded
  scanDate: attr('date'),
  provaderStatus: attr('string'),
  riskAverage: attr('number'),
  riskCoverage: attr('number'),
  totalVulnerabilities: attr('number'),
  totalPCIVulnerabilities: attr('number'),
  asvProviderAsString: attr('string'),
  asvProvider: attr('string')
});
