import DS from 'ember-data';

export default DS.Model.extend({
	assetIps: DS.hasMany('asset-ip', {async: true}),
	scans: DS.hasMany('scan', {async: true}),
	contactInfo: DS.attr(),
	merchant: DS.attr()
});
