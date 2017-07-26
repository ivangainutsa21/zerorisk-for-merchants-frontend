import Model from 'ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  'contactInfo': validator('belongs-to'),
  'address': validator('belongs-to')
});

export default Model.extend(Validations, {
  assetIps: hasMany('asset-ip', { async: true }), // retrieved on demand when /assetIps is GET
  scans: hasMany('scan', { async: true }), // retrieved on demand when /scans is GET
  users: hasMany('user', { async: true }), // retrieved on demand when /users is GET
  // children: hasMany('entity', { inverse: 'parent', async: true }),
  // parent: belongsTo('entity', { inverse: 'children', async: true }),
  contactInfo: belongsTo('contact-info', { async: false }), // embedded
  merchant: belongsTo('merchant') // nested and readOnly
});
