import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
	serialize: function(snapshot, options) {
	  var json = this._super(snapshot, options);
	  delete json.pciPassed;
	  return json;
	}
});
