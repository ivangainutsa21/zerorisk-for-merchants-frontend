import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs: {
	  vulnerabilities: { deserialize: 'records', serialize: false },
		pciPassed: { serialize: false },
		riskAverage: { serialize: false },
		riskCoverage: { serialize: false },
		totalVulnerabilities: { serialize: false },
		totalPCIVulnerabilities: { serialize: false },
		status: { serialize: false },
		PCIStatus: { serialize: false },
		isNotExpired: { serialize: false }
	}
});
