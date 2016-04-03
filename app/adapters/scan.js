import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
	pathForType: function(modelName) {		
	  var camelized = Ember.String.camelize(modelName);
	  return 'asv/' + Ember.String.pluralize(camelized);
	}	
});
