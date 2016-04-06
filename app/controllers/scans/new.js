/*global $*/
import Ember from 'ember';

export default Ember.Controller.extend({
	selectedAssetIpIds: [],
	entityId: null,
	isLaunching: null,

	availableIps: function() {
		if(this.get('entityId')) {				
			return this.get('model.entities').findBy('id', this.get('entityId')).get('assetIps');
		}
	}.property('entityId'),

	actions: {
		selectEntity(entityId) {
 			this.setProperties({
 				'entityId': entityId,
 				'selectedAssetIpIds': null
 			});
 			Ember.$("#new-scan-select").val(null).trigger("change");
		},
		selectAssetIps(event) {
			const selectedAssetIps = Ember.$(event.target).val();
			this.set('selectedAssetIpIds', selectedAssetIps || []);			
		},
		launchScan() {
			this.set('isLaunching', true);
			$.ajax({
			  type: "POST",
			  url: this.store.adapterFor('application').namespace + '/asv/scans',
			  data: JSON.stringify({
			    entityId: this.get('entityId'),
			    assetIpIds: this.get('selectedAssetIpIds')
			  }),
			  contentType: 'application/json'
			}).then((response) => {
				this.set('isLaunching', false);
				if(response.success) {
					$('body').pgNotification({
						"style": "bar", 
						"position": "top", 
						"message": "Scan launched succesfully.",
						"type": "success"
					}).show();
					window.history.go(-1);
				} else {
					$('body').pgNotification({
						"style": "bar", 
						"position": "top", 
						"message": "Oh no..",
						"type": "danger"
					}).show();
				}
			}).fail(()=>{
				this.set('isLaunching', false);
				$('body').pgNotification({
					"style": "bar", 
					"position": "top", 
					"message": "Oh no..",
					"type": "danger"
				}).show();
			});
		}
	}
});
