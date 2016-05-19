import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  email() { return faker.internet.email(); },
  firstName() { return faker.name.firstName(); },
  lastName() { return faker.name.lastName(); },
  enabled: true,
  role: 'ROLE_MERCHANT_ENTITY_ADMIN'  
});
