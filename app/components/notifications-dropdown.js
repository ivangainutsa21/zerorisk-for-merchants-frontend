import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: 'notification-list no-margin hidden-sm hidden-xs b-grey b-l no-style p-l-50 p-r-20 height-auto',

  unreadCount: Ember.computed('notifications.@each.status', function() {
    return this.get('notifications').filterBy('status', 'NEW').length;
  }),

  limitedUnreadCount: Ember.computed('unreadCount', function() {
    let unreadCount = this.get('unreadCount');
    if (unreadCount >= 100) {
      return '99+';
    } else {
      return unreadCount;
    }
  })
});
