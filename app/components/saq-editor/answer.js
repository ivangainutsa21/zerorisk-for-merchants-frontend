import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	tagName: '',

	actions: {
		answer(responseType) {			
			this.get('question').get('answer').then((answer) => {
				if(!answer) {
					let answer = this.get('store').createRecord('saqAnswer', { saq: this.get('question').get('saq'), question: this.get('question'), responseType: responseType });
					answer.save();
				} else {
			  	answer.set('responseType', responseType);
			  	answer.save();
				}
				this.get('onSaveAnswer')();
			});
		}
	}
});
