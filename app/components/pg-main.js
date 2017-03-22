import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement() {
		// Adding flex-container class to first .ember-view
		Ember.$('.ember-view:not(.liquid-target-container)').first().addClass('main-wrapper');
	}
});
