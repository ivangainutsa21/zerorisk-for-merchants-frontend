import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import AjaxServiceSupport from 'ember-ajax/mixins/ajax-support';
import paths from 'zerorisk-for-merchants/utils/paths';

export default DS.RESTAdapter.extend(DataAdapterMixin, AjaxServiceSupport, {
  host: paths().host(),
  namespace: `${paths().namespace}/merchant`,

  authorizer: 'authorizer:cookie',
  coalesceFindRequests: true,

  // isSuccess(status, headers, payload) {
  //   return payload.success;
  // },

  // isInvalid(status) {
  //   return status === 400 || status === 422;
  // }
});
