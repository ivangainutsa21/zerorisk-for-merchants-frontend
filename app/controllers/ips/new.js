import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		selectEntity(entityId) {
 			this.get('model.assetIp').set('entityId', this.store.peekRecord('entity', entityId));
		},
		saveIp() {
			this.get('model.assetIp').save();
		}
	}
});
