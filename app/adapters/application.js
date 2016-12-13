import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import paths from 'zerorisk-for-merchants/utils/paths';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  host: paths().host(),
  namespace: `${paths().namespace}/merchant`,

  authorizer: 'authorizer:cookie',
  coalesceFindRequests: true,

  headers: Ember.computed(function() {
    let csrfCookie = document.cookie.match(/X-\CSRF\-TOKEN\=([^;]*)/);
    if (csrfCookie) {
      return {
        "X-CSRF-TOKEN": decodeURIComponent(Ember.get(csrfCookie, "1"))
      };
    }
  }).volatile(),

  isSuccess(status, headers, payload) {
    return payload.success;
  },

  isInvalid(status) {
    return status === 400 || status === 422;
  }
});
