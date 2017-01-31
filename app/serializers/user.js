import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
	attrs: {
		merchantStatus: { serialize: false },
		merchantCustomizationId: { serialize: false }		
	}
});
