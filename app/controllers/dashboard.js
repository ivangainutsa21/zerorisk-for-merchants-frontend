import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		new() {
			var ip = this.store.createRecord('asset-ip', {
				ipnumber: "2.232.93.59",
				hostname: "ldxs",
				tag: "ldxsplace",
				description: "ldx's place"
			});

			ip.save(); 
		}
	}
});
