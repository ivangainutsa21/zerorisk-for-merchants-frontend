import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['form-group', 'form-group-default'],

	// tooltip stuff
	tooltipContent: Ember.computed.alias('messages'),
	tooltipEffectClass: 'grow',
	tooltipPlace: 'top',
	tooltipTabIndex: -1,
	tooltipTypeClass: 'warning',
	tooltipVisibility: Ember.computed.alias('showMessages'),
	tooltipEvent: 'manual',


	init() {
		this._super(...arguments);
		let fieldName = this.get('field');

		Ember.defineProperty(this, 'value', Ember.computed.alias(`model.${fieldName}`));
		Ember.defineProperty(this, 'validations', Ember.computed.oneWay(`model.validations.attrs.${fieldName}`));
	},

	hasInteracted: false,
	showMessages: Ember.computed.and('hasInteracted', 'hasErrorOrValidationMessages'),
	hasValidationMessages: Ember.computed.notEmpty('validations.messages'),
	hasErrorMessages: Ember.computed.notEmpty('errors'),
	hasErrorOrValidationMessages: Ember.computed.or('hasValidationMessages', 'hasErrorMessages'),


	messages: Ember.computed('validations.messages', 'errors.@each.message', function() {
		let messages = [];
		let validationMessages = this.get('validations.messages');
		let errorMessages = this.get('errors');

		if(validationMessages) {
			validationMessages.forEach(message => {
				messages.push(message);
			});
		}

		if(errorMessages) {
			errorMessages.forEach(error => {
				messages.push(error.message);
			});
		}


		if(Ember.isEmpty(messages)) {
			return ' ';
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
