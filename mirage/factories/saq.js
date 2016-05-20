import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  // entity(i) {
  //   return faker.list.random(2, 3, 4,)(i);
  // },
  // questions() {
  //   const numbers = [];
  //   let n = 5;
  //   while( n-- ) {
  //     numbers.push( faker.random.number( 20 ) + 1 );
  //   }
  //   return [ ...new Set(numbers) ];
  // },
  // answers: [1,2,3,4,5,6,7,8,9,10,11,12], //[11,22,13,14,15,16,17,18,19,110,111,112],
  description() { return faker.lorem.sentence() }
});
