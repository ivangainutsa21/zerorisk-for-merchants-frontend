import DS from 'ember-data';

export default DS.Model.extend({
	assetIps: DS.hasMany('asset-ip', {async: true}),
	scans: DS.hasMany('scan', {async: true}),
	companyName: DS.attr('string')
});
