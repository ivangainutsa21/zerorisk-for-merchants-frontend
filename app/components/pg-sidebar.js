/*global $*/
import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'nav',
	classNames: 'page-sidebar',
	attributeBindings: 'sidebar:data-pages',
	sidebar: 'sidebar',
	
	didInsertElement() {
		$.Pages.initSidebar();
	}
});
