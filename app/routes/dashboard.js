import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	currentUser: Ember.inject.service(),

	afterModel() {
		this.store.find('user', this.get('currentUser.id'));
	}
});
