import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',

	selectedQuestion: null,

	init() {
		this._super(...arguments);
		this.set('selectedQuestion', this.get('saq.questions.firstObject'));
	},

	actions: {
		selectQuestion(question) {
			this.set('selectedQuestion', question);
		}
	}
});
