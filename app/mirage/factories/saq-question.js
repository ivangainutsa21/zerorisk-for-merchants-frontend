import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  text() { return faker.lorem.sentence(); }
});
