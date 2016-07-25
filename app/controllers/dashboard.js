import Ember from 'ember';
import injectService from 'ember-service/inject';

export default Ember.Controller.extend({
	i18n: injectService(),
	statsMode: 'individual',

	stats: Ember.computed('model', 'statsMode', function() {
		return this.get(`model.${this.get('statsMode')}`);
	}),

	humanMerchantStatus: Ember.computed('stats', function() {		
		return this.get('i18n').t(`status.${this.get('stats.status.merchantStatus')}`);
	}),

	humanAsvStatus: Ember.computed('stats', function() {		
		if(this.get('stats.status.pciPassed')) {
			return this.get('i18n').t(`status.asv_compliant`);
		} else {
			return this.get('i18n').t(`status.asv_not_compliant`);
		}
	}),

	availableActions: Ember.computed.alias('model.actions'),

	saqsCompleteness: Ember.computed('stats', function() {
		let total = this.get('stats.saqs.pending') + this.get('stats.saqs.completed') + this.get('stats.saqs.submitted');		
		if(total === 0)	{
			return 0;		
		} else {
			return Math.floor( (this.get('stats.saqs.submitted') / total) * 100 );
		}		
	}),

	actions: {
		downloadSAQ(saqId) {
			this.store.find('saq', saqId).then(saq => saq.download());
		}
	}
});
