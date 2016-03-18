import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		new() {
			var ip = this.store.createRecord('asset-ip', {
				//ipNumber: "aa",
				hostName: "ldxs99",
				tag: "ldxsplace99",
				description: "ldxsplace999",
				entityId: this.store.peekRecord('entity', 3)
			})

			ip.save().catch(() => {
				ip.rollbackAttributes();
			});; 
		}
	}
});
