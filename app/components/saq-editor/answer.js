import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',
	
	store: Ember.inject.service(),

	isEditingNotApplicable: false,
	isEditingCompensatingControls: false,

	// Hooks
	didUpdateAttrs() {
		if (this.get('isEditingNotApplicable')) {
			this.stopEditingNotApplicable();		
		}

		if (this.get('isEditingCompensatingControls')) {
			this.stopEditingCompensatingControls();		
		}		
	},

	// Methoods
	saveAnswer(answer, responseType) {
  	answer.set('responseType', responseType);
  	answer.save().then(() => {
  		this.get('onSaveAnswer')();
  	})
  	.catch(() => {
			answer.unloadRecord();
		});			
	},

	createAnswerIfDoesntExist(responseType) {
		return this.get('question').get('answer').then((answer) => {
			if (!answer) {
				return this.get('store').createRecord('saqAnswer', { saq: this.get('question').get('saq'), question: this.get('question'), responseType: responseType });		
			} else {
				return answer;
			}
		});	
	},

	stopEditingNotApplicable() {
		// check if unsaved changes
		this.set('isEditingNotApplicable', false);
		// this.get('question').get('answer').then((answer) => {
		// 	if(answer && answer.get('hasDirtyAttributes')) {
		// 		var c = confirm('confirm leaving? you have unsaved changes');
		// 		if(c == true) {
		// 			this.set('isEditingNotApplicable', false);
		// 		}
		// 	}
		// });
	},

	stopEditingCompensatingControls() {
		// check if unsaved changes
		this.set('isEditingCompensatingControls', false);
	},

	actions: {
		answer(responseType) {
			this.createAnswerIfDoesntExist(responseType).then(answer => this.saveAnswer(answer, responseType));
			// if (responseType === 'YES' || responseType === 'NO') {
			// } else (responseType === 'NOT_APPLICABLE') {
			// }
		},

		startEditingNotApplicable() {
			this.set('isEditingNotApplicable', true);
			this.createAnswerIfDoesntExist('NOT_APPLICABLE');
		},

		startEditingCompensatingControls() {
			this.set('isEditingCompensatingControls', true);
			this.createAnswerIfDoesntExist('COMPENSATING_CONTROLS');
		}
	}
});
