import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		selectEntity(entity) {
			this.set('entityId', entity.get('id'));
		}
	}
});
