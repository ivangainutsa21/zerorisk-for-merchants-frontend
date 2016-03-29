import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	activate() {
		Ember.run.scheduleOnce('afterRender', this, () => {
			$("#entity-select").select2();
		});
	},
	model() {
		return Ember.RSVP.hash({
			entities: this.store.findAll('entity'),
			assetIp: this.store.createRecord('asset-ip')
		});
	}
});
