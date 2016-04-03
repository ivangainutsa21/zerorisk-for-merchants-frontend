import DS from 'ember-data';

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
	PCIStatus: DS.attr('string'),
	isNotExpired: DS.attr('boolean')
});
