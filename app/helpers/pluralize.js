import Ember from 'ember';

export function pluralize(params, hash) {
  var number = params[0],
          single = params[1];
  var out = hash.noNumber ? '' : number + ' ';
  Ember.assert('pluralize requires a singular string (s)', single);
  var plural = params[2] || single + 's';
  out += (number === 1) ? single : plural;
  return out;
}

export default Ember.Helper.helper(pluralize);