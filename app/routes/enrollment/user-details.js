import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	session: Ember.inject.service(),

	hasCompletedStep: false,

	model() {
		this.store.find('entity', this.get('session.currentUser.entityId'));
	}

});
