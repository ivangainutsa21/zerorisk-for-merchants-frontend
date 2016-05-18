import Ember from 'ember';

export default Ember.Component.extend({
  expandedNotificationId: null,

  unreadCount: Ember.computed('notifications.@each.notificationStatus', function() {
    return this.get('notifications').filterBy('notificationStatus', 'NEW').length;
  }),

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
    }
  }
});
