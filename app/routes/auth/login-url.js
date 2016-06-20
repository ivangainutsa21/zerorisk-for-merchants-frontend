import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import injectService from 'ember-service/inject';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
	session: injectService(),	
	errorParser: injectService(),	
	alerting: injectService(),

	beforeModel() {		
		this._super(...arguments);
		if(this.get('session.isAuthenticated')) {
			this.get('alerting').notify('You are already logged in. Log out first if you wish to use another account.', 'info');	
		}		
	},

	model(params) {		
		return this.get('session').authenticate('authenticator:cookie', params).then(
		  () => {		  			    
		    this.get('alerting').notify('Successfully authenticated.', 'success', 'bottom-right-toast');
		  },
		  response => {
		  	this.controllerFor('auth.login-url').set('error', "The login URL you just tried to use is either expired or incorrect. Please try again.");
		    //this.set('error', this.get('errorParser').parseAndDisplay(response, 'notification'));
		  }
		);
	}
});
