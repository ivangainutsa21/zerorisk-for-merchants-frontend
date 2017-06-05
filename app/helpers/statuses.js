import Ember from 'ember';
import Statuses from './../utils/statuses';

export function statuses(params/*, hash*/) {
  const value = params[0],
    key = params[1];
  return Statuses[value][key];
}

export default Ember.Helper.helper(statuses);
