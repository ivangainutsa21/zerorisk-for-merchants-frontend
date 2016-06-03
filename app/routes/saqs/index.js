import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		this.store.findAll('saq').then(saqs => {
			if (!saqs) {
				alert("You have no SAQs to complete!");
			} else {
				this.transitionTo('saqs.edit', saqs.get('lastObject'));
			}
		});
	}
});
