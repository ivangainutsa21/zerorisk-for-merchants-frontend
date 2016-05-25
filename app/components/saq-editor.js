import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',

	selectedQuestion: null,
	isSubmitting: false,

	init() {
		this._super(...arguments);
		this.set('selectedQuestion', this.get('saq.questions.firstObject'));
	},

	isCompleted: Ember.computed('saq.questions.[]', 'saq.answers.[]', function() {
		return this.get('saq.questions.length') === this.get('saq.answers.length');
	}),

	globalCompleteness: Ember.computed('saq.questions.[]', 'saq.answers.[]', function() {
		if(this.get('saq.answers.length') > 0) {
			return Math.floor((this.get('saq.answers.length') / this.get('saq.questions.length')) * 100);
		} else {
			return 0;
		}
	}),

	actions: {
		selectQuestion(question) {
			this.set('selectedQuestion', question);
		},
		goNext() {			
		  let nextQuestion = this.get('saq.questions').nextObject(this.get('selectedQuestion.id'));
		  if(nextQuestion) {
		  	Ember.run.later(this, () => {
		  		this.set('selectedQuestion', nextQuestion);	
		  	}, 100);		  	
		  }
		},
		submit() {
			let saq = this.get('saq');
			this.set('isSubmitting', true);
			saq.set('status', 'submitted');
			saq.save().then(() => {
				this.set('isSubmitting', false);
			});
		}
	}
});
