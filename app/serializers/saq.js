import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend({
	attrs: {
		entity: { serialize: false },
		questions: { serialize: false },
		answers: { serialize: false }		
	}
});
