import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	currentUser: Ember.inject.service(),
	alerting: Ember.inject.service(),

  beforeModel(transition) {
    if(this.get('currentUser.merchantStatus') !== 'NotEnrolled') {
      transition.abort();
      this.get('alerting').notify('You have already completed the enrollment!', 'info');
      this.transitionTo('dashboard');
    } else {
      this.transitionTo('enrollment.welcome');          
    }    
  },

  actions: {
  	willTransition(transition) {
  		if(transition.targetName.indexOf('enrollment') === -1) {
  			if(this.get('currentUser.merchantStatus') === 'NotEnrolled') {
  				transition.abort();
  				this.get('alerting').notify('You must complete the enrollment wizard before using the application.', 'info');
  			}
  		}
  	}
  }
});
