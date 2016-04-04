import Ember from 'ember';

export default Ember.Route.extend({
	activate() {
		Ember.run.scheduleOnce('afterRender', this, () => {
			//$("#entity-select").select2();
			$.Pages.initSelect2Plugin();
		});
	},
	model() {
		return Ember.RSVP.hash({
			assetIps: this.store.findAll('asset-ip'),
			entities: this.store.findAll('entity'),
			scan: this.store.createRecord('scan'),
		});
	}
});
