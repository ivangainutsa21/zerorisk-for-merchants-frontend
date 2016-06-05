/*global jQuery*/
import Ember from 'ember';
import { EKMixin, keyDown } from 'ember-keyboard';

function isElementInViewport (el) {
    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

export default Ember.Component.extend(EKMixin, {
	tagName: '',

	selectedQuestion: null,
	isSubmitting: false,
	downloadSaqTooltipIsShowing: false,
	
	init() {
		this._super(...arguments);
		// Select first unaswered question
		// if no questions are answered or all of them are, 
		// select first question.
		this.get('saq.questions').then(questions => {
			this.get('saq.answers').then(() => {

				this.set('keyboardActivated', true);

				let unansweredQuestions = questions.filter((question) => {
					return question.belongsTo('answer').value() === null;
				});				
				if(!Ember.isEmpty(unansweredQuestions)) {
					this._setSelectedQuestion(unansweredQuestions.get('firstObject'));
				} else {
					this._setSelectedQuestion(questions.get('firstObject'));
				}
			});
		});
	},

	savedAnswers: Ember.computed('saq.answers.[]', 'saq.answers.@each.type', function() {
		return this.get('saq.answers').filterBy('isNew', false).rejectBy('type', 'NO');
	}),

	// isCompleted: Ember.computed('globalCompleteness', function() {
	// 	//return this.get('saq.questions.length') === this.get('savedAnswers.length');
	// 	return this.get('globalCompleteness') === 100;
	// }),
	isCompleted: Ember.computed.equal('globalCompleteness', 100),

	submitSaqTooltipIsShowing: Ember.computed.oneWay('isCompleted'),

	globalCompleteness: Ember.computed('saq.questions.[]', 'savedAnswers.[]', function() {
		if(this.get('savedAnswers.length') > 0) {
			let completeness = Math.floor((this.get('savedAnswers.length') / this.get('saq.questions.length')) * 100);
			if(completeness > 100) {
				return 100;
			} else {
				return completeness;
			}			
		} else {
			return 0;
		}
	}),

	_setSelectedQuestion(question) {
		this.set('selectedQuestion', question);
		Ember.run.scheduleOnce('afterRender', function() {
			let el = document.getElementById(`question-${question.get('id')}`);
			if(!isElementInViewport(el)) {
				document.getElementById(`question-${question.get('id')}`).scrollIntoView();	
			}			
		});		
	},

	_goNext() {
	  let currentQuestionIndex = this.get('saq.questions').indexOf(this.get('selectedQuestion'));		
	  let nextQuestion = this.get('saq.questions').objectAt(currentQuestionIndex+1);

	  if(nextQuestion) {
			this._setSelectedQuestion(nextQuestion);
	  }
	},

	_goPrev() {			
	  let currentQuestionIndex = this.get('saq.questions').indexOf(this.get('selectedQuestion'));		
	  let prevQuestion = this.get('saq.questions').objectAt(currentQuestionIndex-1);

	  if(prevQuestion) {
  		this._setSelectedQuestion(prevQuestion);
	  }
	},

	_okToLeaveSelectedQuestion() {
		return this.get('selectedQuestion').get('answer').then((answer) => {										
			if(answer && answer.get('hasDirtyAttributes')) {					
				let c = confirm('Confirm leaving? You have unsaved changes.');
				if(c === true) {					
					answer.rollbackAttributes();					
					return true;
				} else {
					return false;
				} 
			} else {
				return true;
			}
		});
	},

	// Keyboard events
	kGoNext: Ember.on(keyDown('ArrowDown'), keyDown('ArrowRight'), function() {
		this._goNext();
	}),

	kGoPrev: Ember.on(keyDown('ArrowUp'), keyDown('ArrowLeft'), function() {
		this._goPrev();
	}),

	actions: {
		selectQuestion(question) {
			this._okToLeaveSelectedQuestion().then(ok => {
				if (ok) {
					this._setSelectedQuestion(question);
				}
			});
		},

		okToLeaveSelectedQuestion() {
			return this._okToLeaveSelectedQuestion();
		},

		goNext() {
			this._goNext();
		},

		goPrev() {
			this._goPrev();
		},

		submit() {
			let saq = this.get('saq');
			this.set('isSubmitting', true);
			saq.set('status', 'SUBMITTED');
			saq.save().then(() => {
				this.set('isSubmitting', false);
				this.set('downloadSaqTooltipIsShowing', true);
			});
		},

		download() {
			this.get('saq').download();
			// window.location = "assets/Self-Assessment_Questionnaire_A_and_Attestation_of_Compliance.docx";
		}
	}
});
