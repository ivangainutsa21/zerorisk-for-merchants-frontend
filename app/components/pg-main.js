import Ember from 'ember';

export default Ember.Component.extend({
	// tagName: ''
	didInsertElement() {
		// Adding flex-container class to first .ember-view
		Ember.$('.ember-view:not(.liquid-target-container)').first().addClass('full-height');
	}
});
