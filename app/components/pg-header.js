import Ember from 'ember';
import injectService from 'ember-service/inject';

export default Ember.Component.extend({
	session: injectService(),
	remodal: injectService(),
	
	tagName: '',

	actions: {
		openLanguageSelector() {
			this.get('remodal').open('language-selector');
		}
	}
});
