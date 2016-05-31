import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',
	
	store: Ember.inject.service(),

	isEditingNotApplicable: false,
	isEditingCompensatingControls: false,
	activeCompensatingControlPoint: 'constraints',

	// Hooks
	didUpdateAttrs() {
		this.stopEditingNotApplicableAndCompensatingControlsIfEditing();
	},

	// Methoods
	saveAnswer(answer, answerType) {
  	answer.set('type', answerType);
  	answer.save().then(() => {
  		this.stopEditingNotApplicableAndCompensatingControlsIfEditing();
  		this.get('onSaveAnswer')();
  	})
  	.catch(() => {
			answer.unloadRecord();
		});			
	},

	createAnswerIfDoesntExist(answerType) {
		return this.get('question').get('answer').then((answer) => {
			if (!answer) {
				return this.get('store').createRecord('saqAnswer', { saq: this.get('question').get('saq'), question: this.get('question'), type: answerType });		
			} else {
				return answer;
			}
		});	
	},

	stopEditingNotApplicableAndCompensatingControlsIfEditing() {
		if (this.get('isEditingNotApplicable')) {
			this._stopEditingNotApplicable();		
		}

		if (this.get('isEditingCompensatingControls')) {
			this._stopEditingCompensatingControls();		
		}		
	},

	_stopEditingNotApplicable() {
		this.get('okToLeaveSelectedQuestion')().then(ok => {
			if (ok) {
				this.set('isEditingNotApplicable', false);
			}		
		});
	},

	_stopEditingCompensatingControls() {
		// check if unsaved changes
		this.set('isEditingCompensatingControls', false);
		this.set('activeCompensatingControlPoint', 'constraints');
	},

	actions: {
		answer(answerType) {
			this.createAnswerIfDoesntExist(answerType).then(answer => this.saveAnswer(answer, answerType));
		},

		startEditingNotApplicable() {
			this.set('isEditingNotApplicable', true);
			this.createAnswerIfDoesntExist('NOT_APPLICABLE');
		},

		startEditingCompensatingControls() {
			this.set('isEditingCompensatingControls', true);
			this.createAnswerIfDoesntExist('COMPENSATING_CONTROLS');
		},

		stopEditingNotApplicable() {
			this._stopEditingNotApplicable();
		},

		stopEditingCompensatingControls() {
			this._stopEditingCompensatingControls();
		}
	}
});
