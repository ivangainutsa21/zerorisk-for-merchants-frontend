import Ember from 'ember';
import injectService from 'ember-service/inject';

export default Ember.Component.extend({
	remodal: injectService(),

	actions: {
		agree() {
			this.get('onAgree')();
			this.send('close');
		},
		close() {
			this.get('remodal').close('terms-and-conditions');
		}
	}
});
