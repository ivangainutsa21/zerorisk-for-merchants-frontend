import Ember from 'ember';

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

export default Ember.Component.extend({
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
				let unansweredQuestions = questions.filter((question) => {
					return question.belongsTo('answer').value() === null;
				});				
				if(!Ember.isEmpty(unansweredQuestions)) {
					this._setSelectedQuestion(unansweredQuestions.get('firstObject'))					
				} else {
					this._setSelectedQuestion(questions.get('firstObject'))
				}
			});
		});
	},

	savedAnswers: Ember.computed('saq.answers.[]', function() {
		return this.get('saq.answers').filterBy('isNew', false);
	}),

	isCompleted: Ember.computed('saq.questions.[]', 'savedAnswers.[]', function() {
		return this.get('saq.questions.length') === this.get('saq.answers.length');
	}),

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

	actions: {
		selectQuestion(question) {
			this.get('selectedQuestion').get('answer').then((answer) => {			
				console.log(answer);
				if(answer && answer.get('hasDirtyAttributes')) {					
					var c = confirm('confirm leaving? you have unsaved changes');
					if(c == true) {
						answer.rollbackAttributes();
						this._setSelectedQuestion(question);
					} 
				} else {
					this._setSelectedQuestion(question);
				}
			});
		},

		goNext() {			
		  let nextQuestion = this.get('saq.questions').nextObject(this.get('selectedQuestion.id'));
		  if(nextQuestion) {
		  	// Ember.run.later(this, () => {
		  		this._setSelectedQuestion(nextQuestion);
		  	// }, 100);		  	
		  }
		},

		submit() {
			let saq = this.get('saq');
			this.set('isSubmitting', true);
			saq.set('status', 'submitted');
			saq.save().then(() => {
				this.set('isSubmitting', false);
				this.set('downloadSaqTooltipIsShowing', true);
			});
		},

		download() {
			window.location = "assets/Self-Assessment_Questionnaire_A_and_Attestation_of_Compliance.docx"
		}
	}
});
