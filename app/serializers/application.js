import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
		return this._super(store, primaryModelClass, payload.result, id, requestType);
	}
});
