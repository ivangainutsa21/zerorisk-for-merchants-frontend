import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import {isAjaxError, isNotFoundError, isForbiddenError, isUnauthorizedError} from 'ember-ajax/errors';

const { Error: EmberError } = Ember;

export default AjaxService.extend({
  session: Ember.inject.service(),
  // namespace: '/api/v1',
  // isSuccess(status, headers, payload) {
  //   return payload.success;
  // }
  handleResponse(status, headers, payload, requestData) {
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
