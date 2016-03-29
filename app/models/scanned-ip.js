import DS from 'ember-data';

export default DS.Model.extend({
	scan: DS.belongsTo('scan'),
	ipNumber: DS.attr('string'),
	hostName: DS.attr('string'),
	tag: DS.attr('string'),
	description: DS.attr('string')
});
