import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model() {
		// return Ember.RSVP.hash({
		//   entities: this.store.findAll('entity'),
		//   assetIps: this.store.findAll('asset-ip')
		// });	
		return this.store.findAll('entity');
	},
	afterModel() {
		this.store.findAll('asset-ip');
	}
});