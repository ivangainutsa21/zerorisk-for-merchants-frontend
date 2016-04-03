import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs: {
	  vulnerabilities: { embedded: 'always' }
	},
	serialize: function(snapshot, options) {
	  var json = this._super(snapshot, options);
	  delete json.pciPassed;
	  delete json.riskAverage;
	  delete json.riskCoverage;
	  delete json.totalVulnerabilities;
	  delete json.totalPCIVulnerabilities;
	  delete json.status;
	  delete json.PCIStatus;
	  delete json.isNotExpired;
	  return json;
	}
});
