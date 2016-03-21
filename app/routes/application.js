import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
	session: Ember.inject.service(),
	// Overwriting 'sessionInvalidated' with a custom function to prevent location reloading and giving user custom messages
	sessionInvalidated: function() {		
		Ember.run.once(this, () => {
			if(this.get('session').get('data.reasonForInvalidation') === 'logout') {
				// TODO: Toast stuff 
				//Materialize.toast( "You've successfully logged out.", 4000);
			} else {
				//Materialize.toast( "Your session has expired. Please log back in.", 4000);
			}
			this.get('session').set('data.reasonForInvalidation', null);
			// Unloading all stores to clean last session data
			this.store.unloadAll();
			this.transitionTo('login');
		});
	},
	actions: {
		logout: function() {
			// Setting session data var to inform the 'sessionInvalidated' that the reason for invalidation is requested logout from user
			this.get('session').set('data.reasonForInvalidation', 'logout');
			this.get('session').invalidate();
		}
	}
});
