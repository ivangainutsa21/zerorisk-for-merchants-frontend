import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  question(i) { return i+1 },
  saq: 1,
  responseType: "YES"
});
