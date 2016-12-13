import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import injectService from 'ember-service/inject';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	ajax: injectService(),

	model() {
    if((this.get('ajax').namespace))
      console.log(this.get('ajax').namespace);
    else 
      debugger;
      
		return this.get('ajax').request('/merchant/dashboard').then(payload => payload.result.dashboard);
	},

	activate() {
		Ember.run.scheduleOnce('afterRender', function() {
			Ember.$.Pages.initProgressBars();		
		});
	}
});