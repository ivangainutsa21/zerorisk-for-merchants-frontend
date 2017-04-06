import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import { isForbiddenError, isUnauthorizedError } from 'ember-ajax/errors';
import paths from 'zerorisk-for-merchants/utils/paths';

const { Error: EmberError } = Ember;

export default AjaxService.extend({
  session: Ember.inject.service(),
  i18n: Ember.inject.service(),

  host: paths().host(),
  namespace: `${paths().namespace}`,

  headers: Ember.computed(function() {
    let csrfCookie = document.cookie.match(/X-\CSRF\-TOKEN\=([^;]*)/),
        locale = this.get('i18n.locale'),
        headers = {};

    if (csrfCookie) {
      headers["X-CSRF-TOKEN"] = decodeURIComponent(Ember.get(csrfCookie, "1"));        
    }

    if (locale) {
      headers.locale = locale;
    }

    headers.App = "merchant";

    return headers;    
  }).volatile(),

  // isSuccess(status, headers, payload) {
  //   return payload.success;
  // }

  handleResponse(status, headers, payload, requestData) {
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
      // TODO: exclude only GET /notifications
      if (requestData.url.indexOf("notifications") == -1 && requestData.url.indexOf("rss") == -1) {
        this.get('session').setTimeOfLastAPIActivity();
        Ember.Logger.debug('ajax.handleResponse: setTimeOfLastAPIActivity()');      
      } else {
        Ember.Logger.debug('ajax.handleResponse: ignoring setTimeOfLastAPIActivity()');      
      }
    }

    return handledResponse;
  }
});
