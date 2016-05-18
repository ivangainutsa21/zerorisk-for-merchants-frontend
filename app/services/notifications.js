import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  notifications() {
    return this.get('store').findAll('notification');
  },

  updater: task(function * () {
    while(true) {
      this.notifications().then(n => n.update());
      yield timeout(15000);
    }
  }).restartable(),

  startPolling() {
    this.get('updater').perform()
    // this.notifications()
    //     .then(notifications => this.get('updaterInstance', this.get('updater').perform(notifications)))
    //     .catch(() => console.log("Couldn't start Notifications polling."));
  },

  stopPolling() {
    //this.get('updaterInstance').cancel();
    this.get('updater').cancelAll();
  }

});
