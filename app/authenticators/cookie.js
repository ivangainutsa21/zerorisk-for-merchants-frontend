import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';

export default Base.extend({
  authenticationRoute: 'login',

  restore(data) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.email)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(options) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        type: 'POST',
        url: 'api/v1/users/sign_in',
        data: JSON.stringify({
          username: options.identification,
          password: options.password
        })
      }).done((response) => {
        let result = JSON.parse(response).result;
        let resolved = {
              'userId': result.userId,
              'email': options.identification,
              'firstName': result.firstName,
              'lastName': result.lastName,
              'role': result.role,
              'token': result.token
            };

        // console.log(result.role);
        // if (result.role != 'ROLE_MERCHANT_ADMIN' || result.role != 'ROLE_MERCHANT_USER' || result.role != 'ROLE_MERCHANT_ENTITY_ADMIN' || result.role != 'ROLE_ADMIN') {
        //   //this.get('alerting').notify('You are not allowed to use this application.', 'warning', 'bottom-right-toast');
        //   reject({'error': 'You are not allowed to use this application.'});
        // }

        Ember.run(() => {
          resolve(resolved);
        });
      }).fail((xhr) => {
        Ember.run(() => {
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  },

  invalidate() {
    return new Ember.RSVP.Promise((resolve/*, reject*/) => {
      Ember.$.ajax({
        type: 'GET',
        url: 'logout'
      }).then((response) => {
        Ember.run(() => {
          resolve(response);
        });
      }, (xhr) => {
        Ember.run(() => {
          resolve(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  }
});
