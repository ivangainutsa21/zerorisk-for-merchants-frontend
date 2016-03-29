import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({

  authenticationRoute: 'login',

  restore: function(data) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      if (!Ember.isEmpty(data.email)) {
        resolve(data);
      }
      else {
        reject();
      }
    });
  },

  authenticate: function(options) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        type: "POST",
        url: 'api/v1/users/sign_in',
        data: JSON.stringify({
          username: options.identification,
          password: options.password
        }),
        accepts: 'application/json;charset=utf-8',
        headers: {
          'Accept': 'application/json;charset=utf-8'
        }
      }).then(function(/*response*/) {
        Ember.run(function() {
          var response = {"email": options.identification};
          resolve(response);
        });
      }, function(xhr /*, status, error */) {
        Ember.run(function() {
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  },

  invalidate: function() {
    //document.cookie = 'JSESSIONID' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
    return new Ember.RSVP.Promise(function(resolve/*, reject*/) {
      Ember.$.ajax({
        type: "GET",
        url: 'logout',
      }).then(function(response) {
        Ember.run(function() {           
          resolve(response);
        });
      }, function(xhr /*, status, error */) {
        Ember.run(function() {
          resolve(xhr.responseJSON || xhr.responseText);
      });
    });      
  });



  }

});
