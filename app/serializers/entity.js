import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs: {
	  contactInfo: { embedded: 'always' },
		merchant: { embedded: 'always' },
		users: { serialize: false }
	}
});
