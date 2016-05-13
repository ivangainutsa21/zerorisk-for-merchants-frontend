import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['form-group', 'form-group-default'],

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

		if(messages && this.get('tooltip')) {
			this.get('tooltip').content(messages.join('<br>'));
		}

		return messages;
	}),

	actions: {
		setHasInteracted() {
			this.set('hasInteracted', true);
		}
	}
});
