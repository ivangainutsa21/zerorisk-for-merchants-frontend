import Ember from 'ember';

export default Ember.Controller.extend({
	selectedAssetIps: [],

	actions: {
		selectEntity(entityId) {
 			this.get('model.assetIp').set('entityId', this.store.peekRecord('entity', entityId));
		},
		selectAssetIps(event) {
			const selectedAssetIps = Ember.$(event.target).val();
			this.set('selectedAssetIps', selectedAssetIps || []);			
		}
	}
});
