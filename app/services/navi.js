import Ember from 'ember';
const { getOwner, computed } = Ember;

export default Ember.Service.extend({
	routing: Ember.inject.service('-routing'),

	init(...args) {
	  this._super(args);
	  this.set('applicationController', getOwner(this).lookup('controller:application'));
	},

	currentRouteName: computed.alias('applicationController.currentRouteName'),

	isInUnauthenticatedRoute: computed('currentRouteName', function() {
		return this.get('currentRouteName') === "login";
	}),
	isInSaqEditRoute: computed('currentRouteName', function() {
		return this.get('currentRouteName') === "saqs.edit";
	}),
	isInEnrollmentRoute: computed('currentRouteName', function() {
		return this.get('currentRouteName').indexOf("enrollment") !== -1;
	})

});
