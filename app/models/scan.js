import DS from 'ember-data';

export default DS.Model.extend({
	entityId: DS.belongsTo('entity'),
	scanReportId: DS.belongsTo('scan-report'), 
	scannedIps: DS.hasMany('scanned-ip'),
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
