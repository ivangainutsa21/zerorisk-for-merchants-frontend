import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

const { computed } = Ember;

export default Model.extend({
  subject: attr('string'),
  body: attr('string'),
  notificationType: attr('string'),
  notificationStatus: attr('string'),
  notificationStatusCode: attr('string'),
  created: attr('date'),
  isUnread: computed('notificationStatus', function() {
    return this.get('notificationStatus') === 'NEW';
  }).readOnly(),
  isWarning: computed('notificationType', function() {
    return this.get('notificationType') === 'SAQ_EXPIRATION_YEAR' ||
					 this.get('notificationType') === 'SAQ_EXPIRATION_EARLY' ||
					 this.get('notificationType') === 'SCAN_FAILED' ||
					 this.get('notificationType') === 'ASSET_IP_EXPIRATION_EARLY' ||
					 this.get('notificationType') === 'ASSET_IP_EXPIRATION_FINAL' ||
					 this.get('notificationType') === 'USER_PASSWORD_EXPIRATION_EARLY' ||
					 this.get('notificationType') === 'USER_PASSWORD_EXPIRATION_FINAL' ||
					 this.get('notificationType') === 'PINPOINT_QUICK_AUDIT_FAIL';
  }).readOnly()
});
