import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import injectService from 'ember-service/inject';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
	session: injectService(),
	alerting: injectService(),

	beforeModel() {		
		this._super(...arguments);
		if(this.get('session.isAuthenticated')) {
			this.get('alerting').notify('You are already logged in. Log out first if you wish to use another account.', 'info');	
		}		
	},
});