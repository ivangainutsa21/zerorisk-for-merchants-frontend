import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import {isForbiddenError, isUnauthorizedError} from 'ember-ajax/errors';
import paths from 'zerorisk-for-merchants/utils/paths';

const { Error: EmberError } = Ember;

export default AjaxService.extend({
  session: Ember.inject.service(),

  host: paths().host(),
  namespace: `${paths().namespace}`,

  // isSuccess(status, headers, payload) {
  //   return payload.success;
  // }
  handleResponse() {
    let handledResponse = this._super(...arguments);

    if(isForbiddenError(handledResponse)) {
      console.log("You're not authorized to perform this operation.");
    }

    if(isUnauthorizedError(handledResponse)) {
      this.get('session').invalidate();
    }

    if(!(handledResponse instanceof EmberError)) {
      this.get('session').setTimeOfLastAPIActivity();
    }

    return handledResponse;
  }
});
