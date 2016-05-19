import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
	'contactInfo': validator('belongs-to'),
	'address': validator('belongs-to')
});

export default DS.Model.extend(Validations, {
	assetIps: DS.hasMany('asset-ip', { async: true }), // retrieved on demand when /assetIps is GET
	scans: DS.hasMany('scan', { async: true }), // retrieved on demand when /scans is GET
	contactInfo: DS.belongsTo('contact-info', { async: false }), // embedded
	merchant: DS.attr() // nested and readOnly
});
