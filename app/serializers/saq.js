import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
	attrs: {
		entity: { serialize: false },
		questions: { serialize: false },
		answers: { serialize: false }		
	}
});