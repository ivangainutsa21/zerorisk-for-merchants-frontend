import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  email() { return faker.internet.email(); },
  firstName() { return faker.name.firstName(); },
  lastName() { return faker.name.lastName(); },
  enabled: true,
  role: 'ROLE_MERCHANT_ENTITY_ADMIN',
  merchantStatus: 'Enrolled',
  merchantCustomizationId: 1
});
