import Ember from 'ember';
import injectService from 'ember-service/inject';

export default Ember.Controller.extend({
	remodal: injectService(),
	currentUser: injectService(),
  errorParser: injectService(),


  isLoading: false,

  hasCompletedStep: Ember.computed.oneWay('currentUser.tcAccepted'),

	enrollmentVideoSrc: Ember.computed('currentUser.isUnbranded', function() {
		let fileName = this.get('currentUser.isUnbranded') ? 'merchants-welcome-unbranded' : 'merchants-welcome';
		return [
	  	{ src: `https://s3-eu-west-1.amazonaws.com/wizardvideos/${fileName}.mp4`, type: 'video/mp4' },
	  	{ src: `https://s3-eu-west-1.amazonaws.com/wizardvideos/${fileName}.wemb`, type: 'video/webm' }
		];
	}),

	saveTc() {
		let currentUser = this.get('currentUser');
		if(currentUser.get('tcAccepted')) {
			return currentUser.get('content').save();
		}				
	},

	actions: {
		ready(player) {
			player.play();
		},

		openTermsModal() {
			this.get('remodal').open('terms-and-conditions');
		},

		goNext() {
      this.set('isLoading', true);
			this.saveTc().then( () => {        
				this.transitionToRoute('enrollment.user-details');
        Ember.run.later(this, () => this.set('isLoading', false), 500);        
			}).catch(response => {
        this.set('isLoading', false);				
        this.get('errorParser').parseAndDisplay(response, 'notification')
			});
		}		
	}
});
