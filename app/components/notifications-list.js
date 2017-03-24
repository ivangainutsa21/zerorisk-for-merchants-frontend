import Ember from 'ember';
import injectService from 'ember-service/inject';

export default Ember.Component.extend({
  routing: injectService('-routing'),

  expandedNotificationId: null,

  didInsertElement() {
    Ember.$.Pages.initScrollBarPlugin();
  },

  actions: {
    readNotification(notification) {
      if(this.get('expandedNotificationId') === notification.get('id')) {
        this.set('expandedNotificationId', null);
      } else {
        this.set('expandedNotificationId', notification.get('id'));
      }

      if (notification.get('isUnread')) {
        notification.set('status', 'READ');
        notification.save();
      }
    },

    closeDropdown() {      
      this.get('dropdown').actions.close();      
    },

    goToMessage(messageId) {
      // TODO: use router public api when it becomes available
      this.get('routing').transitionTo('messages.view', [messageId]);
    }
  }
});
