import Ember from 'ember';

export default Ember.Service.extend({
  // Methods
  notify(message, type) {
    $('body').pgNotification({
      "style": "bar",
      "position": "top",
      "message": message,
      "type": type,
    }).show();
  }
});
