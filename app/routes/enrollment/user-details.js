import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import injectService from 'ember-service/inject';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	alerting: injectService(),

	hasCompletedStep: false,

	beforeModel(transition) {
		if (!this.controllerFor('enrollment/welcome').get('hasCompletedStep')) {
			transition.abort();
			this.get('alerting').notify('You have to accept Terms and Conditions before proceeding.', 'info');
		} else {
			if (this.controllerFor('enrollment/welcome').get('currentUser.hasDirtyAttributes')) {
				this.controllerFor('enrollment/welcome').saveTc().catch(() => {
					transition.abort();
					alert("Error accepting Terms and Conditions.");
				});
			}
		}
	},

	model() {
		// TODO: change this when currentEntityId is a thing
		return this.store.find('entity', this.get('currentUser.content').hasMany('entities').ids()[0]);
	}
});
