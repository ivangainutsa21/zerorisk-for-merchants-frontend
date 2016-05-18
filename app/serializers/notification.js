import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  // normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType) {
  //   return this._super(store, primaryModelClass, payload.data, id, requestType);
  // }
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    payload.notifications = payload.data;
    delete payload.data;
    delete payload.type;
    delete payload.name;

    return this._super(store, primaryModelClass, payload, id, requestType);
  }

});
