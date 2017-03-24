import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

const { computed } = Ember;

export default Model.extend({
  subject: attr('string'),
  body: attr('string'),
  type: attr('string'),
  status: attr('string'),
  code: attr('string'),
  created: attr('date'),  
  action: attr(),
  isUnread: computed('status', function() {
    return this.get('status') === 'NEW';
  }).readOnly(),
  isMessageReceived: computed('type', function () {
    return this.get('type') === 'MESSAGE_RECEIVED';
  }).readOnly(),
  isWarning: computed('type', function() {
    return this.get('type') === 'SAQ_EXPIRATION_YEAR' ||
      this.get('type') === 'SAQ_EXPIRATION_EARLY' ||
      this.get('type') === 'SCAN_FAILED' ||
      this.get('type') === 'ASSET_IP_EXPIRATION_EARLY' ||
      this.get('type') === 'ASSET_IP_EXPIRATION_FINAL' ||
      this.get('type') === 'USER_PASSWORD_EXPIRATION_EARLY' ||
      this.get('type') === 'USER_PASSWORD_EXPIRATION_FINAL' ||
      this.get('type') === 'PINPOINT_QUICK_AUDIT_FAIL';
  }).readOnly()
});
