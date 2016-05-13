import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['form-group', 'form-group-default'],

	// tooltip stuff
	tooltipContent: Ember.computed.alias('errorMessages'),
	tooltipEffectClass: 'grow',
	tooltipPlace: 'top',
	tooltipTabIndex: -1,
	tooltipTypeClass: 'warning',
	tooltipVisibility: Ember.computed.alias('showErrors'),
	tooltipEvent: 'manual',

	hasInteracted: false,
	showErrors: Ember.computed.and('hasInteracted', 'hasErrorMessages'),
	hasErrorMessages: Ember.computed.notEmpty('errorMessages'),

	errorMessages: Ember.computed('validations.[]', function() {
		let messages = Ember.A();
		let validationsMessages = this.get('validations.messages');

		if(validationsMessages) {
			validationsMessages.forEach( message => {
				messages.push(message);
			});
		}

		if(Ember.isEmpty(messages)) {
			return "";
		} else {
			return messages.join('<br>');
		}
	}),

	actions: {
		setHasInteracted() {
			this.set('hasInteracted', true);
		}
	}
});
