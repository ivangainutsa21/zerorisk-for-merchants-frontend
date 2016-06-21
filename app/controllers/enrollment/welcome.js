import Ember from 'ember';
import injectService from 'ember-service/inject';

export default Ember.Controller.extend({
	hasCompletedStep: Ember.computed.oneWay('currentUser.tcAccepted'),

	remodal: injectService(),
	currentUser: injectService(),

	enrollmentVideoSrc: [
	  { src: 'https://s3-eu-west-1.amazonaws.com/wizardvideos/merchants-welcome.mp4', type: 'video/mp4' },
	  { src: 'https://s3-eu-west-1.amazonaws.com/wizardvideos/merchants-welcome.wemb', type: 'video/webm' }
	],

	// onTcAcceptedChange: Ember.observer('currentUser.tcAccepted', function() {
	// 	console.log('onTcAcceptedChange');
	// 	let currentUser = this.get('currentUser');
	// 	if(currentUser.get('tcAccepted')) {
	// 		currentUser.get('content').save();
	// 	}
	// }),

	actions: {
		ready(player) {
			player.play();
		},

		openTermsModal() {
			this.get('remodal').open('terms-and-conditions');
		},

		updateTcAccepted(value) {
			console.log(value);
			console.log(this.get('currentUser'));
		},

		goNext() {
			let currentUser = this.get('currentUser');
			if(currentUser.get('tcAccepted')) {
				currentUser.get('content').save()
				.then(() => {
					this.transitionToRoute('enrollment.user-details');
				}).catch(() => {
					alert("Error accepting Terms and Conditions. Try again.");
				});
			}
		}
	}
});
