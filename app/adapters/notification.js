import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  // pathForType() {
  //   return 'poll/notificationController/getNotifications/notifications';
  // }
  findAll() {
    return this.ajax('poll/notificationController/getNotifications/notifications', 'GET');
  },

  updateRecord(_, __, snapshot) {
    return this.ajax('Notifications/Merchant/Update?notificationId=' + snapshot._internalModel.id, 'GET');
  },

  isSuccess(status) {
    return status === 200;
  },
});
