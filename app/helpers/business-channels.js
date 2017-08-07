import Ember from 'ember';
import BusinessChannels from './../utils/business-channels';

export function businessChannels(params/*, hash*/) {
  const value = params[0],
    key = params[1];
  return BusinessChannels[value][key];
}

export default Ember.Helper.helper(businessChannels);
