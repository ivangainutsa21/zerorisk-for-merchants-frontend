import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
	'contactInfo': validator('belongs-to'),
	'address': validator('belongs-to')
});

export default DS.Model.extend(Validations, {
	assetIps: DS.hasMany('asset-ip', { async: true }),
	scans: DS.hasMany('scan', { async: true }),
	contactInfo: DS.belongsTo('contact-info', { async: false }),
	merchant: DS.attr()
});
