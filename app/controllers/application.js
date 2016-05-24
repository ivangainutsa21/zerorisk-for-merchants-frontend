import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),

	isInFullPageRoute: Ember.computed('currentRouteName', function() {
		return this.get('currentRouteName') === "login";
	}),

	isInSaqEditRoute: Ember.computed('currentRouteName', function() {
		return this.get('currentRouteName') === "saqs.edit";
	})
});