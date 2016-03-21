import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),
	isInFullPageRoute: function() {
		return this.get('currentRouteName') === "login";
	}.property('currentRouteName'),
});