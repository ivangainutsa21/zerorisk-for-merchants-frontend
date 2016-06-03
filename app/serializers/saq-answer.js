import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
	attrs: {
		code: { serialize: false }		
	},

	serialize(snapshot, options) {
		let json = this._super(snapshot, options);

		switch(json.type) {
			case 'YES':
			case 'NO':
				delete json.constraints;
				delete json.definition;
				delete json.maintenance;
				delete json.objective;
				delete json.risks;
				delete json.validation;
				delete json.notApplicable;
				break;
			case 'NOT_APPLICABLE':
				delete json.constraints;
				delete json.definition;
				delete json.maintenance;
				delete json.objective;
				delete json.risks;
				delete json.validation;
				break;
			case 'COMPENSATING':
				delete json.notApplicable;
				break;
		}

		return json;
	}
});