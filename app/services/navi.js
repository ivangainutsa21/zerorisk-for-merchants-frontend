import Ember from 'ember';
import injectService from 'ember-service/inject';
const { getOwner, computed } = Ember;

export default Ember.Service.extend({
	routing: injectService('-routing'),
	session: injectService(),

	init(...args) {
	  this._super(args);
	  this.set('applicationController', getOwner(this).lookup('controller:application'));
	},

	currentRouteName: computed.alias('applicationController.currentRouteName'),

	isInUnauthenticatedRoute: computed('currentRouteName', function() {
		return this.get('currentRouteName') === "login" || 
					 this.get('currentRouteName') === "auth.login-url" ||
					 (!this.get('session.isAuthenticated') && this.get('currentRouteName') === "legal.terms-of-use") ||
					 (!this.get('session.isAuthenticated') && this.get('currentRouteName') === "legal.privacy-policy");

	}),
	
	isInLoginRoute: computed('currentRouteName', function() {
		return this.get('currentRouteName') === "login";
	}),

	isInSaqEditRoute: computed('currentRouteName', function() {
		return this.get('currentRouteName') === "saqs.edit";
	}),
	
	isInEnrollmentRoute: computed('currentRouteName', function() {
		return this.get('currentRouteName').indexOf("enrollment") !== -1;
	})

});
