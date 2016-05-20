import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
	authorizer: 'authorizer:cookie',
	namespace: 'api/v2/merchant',
	coalesceFindRequests: true,

	// keyForRelationship: function(key) {
	// 	return `${key}Id`;
	// },

	isSuccess(status, headers, payload) {
	  return payload.success;
	},

	isInvalid(status) {
		return status === 400 || status === 422;
	}
});
