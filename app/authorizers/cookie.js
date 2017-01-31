import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';
const { inject: { service } } = Ember;

export default Base.extend({
  session: service(),

  authorize: function(jqXHR, requestOptions) {
    requestOptions.contentType = 'application/json; charset=utf-8';
    requestOptions.crossDomain = true;
    requestOptions.xhrFields = {
      withCredentials: true
    };
    // this.get('session').setTimeOfLastAPIActivity();
    // Ember.Logger.debug('cookie.authorize: setTimeOfLastAPIActivity()');
  }
});
