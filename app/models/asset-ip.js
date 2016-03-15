import DS from 'ember-data';

export default DS.Model.extend({
	entityId: DS.belongsTo('entity'),
	ipnumber: DS.attr('string'),
	hostname: DS.attr('string'),
	tag: DS.attr('string'),
	description: DS.attr('string'),
	pciPassed: DS.attr('boolean')
});
