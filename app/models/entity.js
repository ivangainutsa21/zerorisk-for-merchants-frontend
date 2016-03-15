import DS from 'ember-data';

export default DS.Model.extend({
	companyName: DS.attr('string'),
	assetIps: DS.hasMany('asset-ip', {async: true})
});
