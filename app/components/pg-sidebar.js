/*global $*/
import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',
	
	didInsertElement() {
		$.Pages.initSidebar();
	}
});
