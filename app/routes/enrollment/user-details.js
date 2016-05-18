import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	hasCompletedStep: false,

	model() {
		return this.store.find('entity', this.get('currentUser.entityId'));
	}

});
