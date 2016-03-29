import DS from 'ember-data';

export default DS.Model.extend({
  	entityId: DS.belongsTo('entity'),
  	scannedIps: DS.hasMany('scanned-ip'),
	scanStart: DS.attr('date'),
	scanEnd: DS.attr('date'),
	scanReference: DS.attr('string'),
	statusAsString: DS.attr('string'),
	riskAverage: DS.attr('number'),
	riskCoverage: DS.attr('number'),
	totalVulnerabilities: DS.attr('number'),
	totalPCIVulnerabilities: DS.attr('number'),
});
