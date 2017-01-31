import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import { isForbiddenError, isUnauthorizedError } from 'ember-ajax/errors';
import paths from 'zerorisk-for-merchants/utils/paths';

const { Error: EmberError } = Ember;

export default AjaxService.extend({
  session: Ember.inject.service(),

  host: paths().host(),
  namespace: `${paths().namespace}`,

  headers: Ember.computed(function() {
    let csrfCookie = document.cookie.match(/X-\CSRF\-TOKEN\=([^;]*)/);
    if (csrfCookie) {
      return {
        "X-CSRF-TOKEN": decodeURIComponent(Ember.get(csrfCookie, "1"))
      };
    }
  }).volatile(),

  // isSuccess(status, headers, payload) {
  //   return payload.success;
  // }

  handleResponse() {
    let handledResponse = this._super(...arguments);

    if (isForbiddenError(handledResponse)) {
      console.log("You're not authorized to perform this operation.");
      this.get('session').invalidate();
    }

    if (isUnauthorizedError(handledResponse) && this.get('session.isAuthenticated')) {
      this.get('session').invalidate();
      Ember.Logger.debug('isUnauthorizedError');      
    }

    if (!(handledResponse instanceof EmberError)) {
      this.get('session').setTimeOfLastAPIActivity();
      Ember.Logger.debug('ajax.handleResponse: setTimeOfLastAPIActivity()');      
    }

    return handledResponse;
  }
});
