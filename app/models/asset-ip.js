import DS from 'ember-data';

export default DS.Model.extend({
	entityId: DS.belongsTo('entity'),
	ipNumber: DS.attr('string'),
	hostName: DS.attr('string'),
	tag: DS.attr('string'),
	description: DS.attr('string'),
	pciPassed: DS.attr('boolean')
});
