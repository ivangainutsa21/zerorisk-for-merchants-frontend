import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('entity');
	},
	afterModel() {
		this.store.findAll('scan');
	}
});