import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import injectService from 'ember-service/inject';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	ajax: injectService(),

	model() {      
		return this.get('ajax').request('/merchant/dashboard').then(payload => payload.result.dashboard);
	},

	activate() {
		Ember.run.scheduleOnce('afterRender', function() {
			Ember.$.Pages.initProgressBars();		
		});
	}
});