import Ember from 'ember';

export default Ember.Controller.extend({
	enrollmentVideoSrc: [
	  { src: 'https://s3-eu-west-1.amazonaws.com/wizardvideos/merchants-welcome.mp4', type: 'video/mp4' },
	  { src: 'https://s3-eu-west-1.amazonaws.com/wizardvideos/merchants-welcome.wemb', type: 'video/webm' }
	],

	actions: {
		ready(player) {
			player.play();
		}
	}
});
