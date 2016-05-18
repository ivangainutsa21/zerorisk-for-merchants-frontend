import DS from 'ember-data';

export default DS.Model.extend({
	subject: DS.attr('string'),
	body: DS.attr('string'),
	notificationType: DS.attr('string'),
	notificationStatus: DS.attr('string'),
	notificationStatusCode: DS.attr('string'),
  created: DS.attr('date'),
	isUnread: Ember.computed('notificationStatus', function() {
		return this.get('notificationStatus') === "NEW";
	}).readOnly(),
	isWarning: Ember.computed('notificationType', function() {
		return this.get('notificationType') === "SAQ_EXPIRATION_YEAR" ||
					 this.get('notificationType') === "SAQ_EXPIRATION_EARLY" ||
					 this.get('notificationType') === "SCAN_FAILED" ||
					 this.get('notificationType') === "ASSET_IP_EXPIRATION_EARLY" ||
					 this.get('notificationType') === "ASSET_IP_EXPIRATION_FINAL" ||
					 this.get('notificationType') === "USER_PASSWORD_EXPIRATION_EARLY" ||
					 this.get('notificationType') === "USER_PASSWORD_EXPIRATION_FINAL" ||
					 this.get('notificationType') === "PINPOINT_QUICK_AUDIT_FAIL";
	}).readOnly()	
});
