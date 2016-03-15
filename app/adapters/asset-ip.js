import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
	pathForType: function(modelName) {		
	  var camelized = Ember.String.camelize(modelName);
	  return 'asv/' + Ember.String.pluralize(camelized);
	}
});
