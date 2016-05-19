import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  entity(i) {
    return faker.list.random(2, 3, 4,)(i);
  },
  questions: [1,2,3,4,5,6,7,8,9,10,11,12],
  answers: [1,2,3,4,5,6,7,8,9,10,11,12], //[11,22,13,14,15,16,17,18,19,110,111,112],
  description() { return faker.lorem.sentence() }
});
