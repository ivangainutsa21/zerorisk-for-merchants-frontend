import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		selectEntity(entityId) {
			console.log(entityId);
			this.get('model.assetIp').set('entityId', this.store.peekRecord('entity', entityId));
			//this.set('entityId', entity.get('id'));
		},
		saveIp() {
			this.get('model.assetIp').save();
		}
	}
});
