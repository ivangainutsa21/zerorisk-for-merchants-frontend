import Ember from 'ember';
import injectService from 'ember-service/inject';

export default Ember.Service.extend({
  alerting: injectService(),

  parseAndDisplay(response, target) {
    return this.display(this.parse(response), target);
  },

  parse(response) {
    let errors = [];
    try {
      if (Ember.isArray(response.errors)) {
        response.errors.forEach((error) => {
          // JSON API error format
          if (error.source && typeof error.source.pointer !== undefined && error.source.pointer) {
            let pointer = error.source.pointer.substr(error.source.pointer.lastIndexOf('/') + 1);
            if (pointer.indexOf('.')) {
              pointer = pointer.substr(pointer.lastIndexOf('.') + 1);
            }
            pointer = Ember.String.capitalize(pointer).replace(/id/i, '').replace(/([a-z])([A-Z])/g, '$1 $2');
            errors.push(pointer + ' ' + error.detail);
          } else if (error.detail) {
            if(error.detail.error) {
              errors.push(error.detail.error);
            } else {
              errors.push(error.detail);
            }
            // old format
          } else if (error.error) {
            errors.push(error.error);
          }
        });
      // even older ofrmat
      } else if (response.result && response.result.errors) {
        errors.push(response.result.errors[0].error);
      } else if (response.error) {
        errors.push(response.error);
      // EmberError instances
      } else if (response.message) {
        errors.push(response.message);              
      } else {
        Ember.Logger.debug(response);
        errors.push('Unable to perform action: unexpected error.');
      }
    } catch(e) {
      Ember.Logger.debug('Error parsing server error: ' + e);
      errors.push('Unable to perform action: unexpected error.');
    }
    return errors;
  },

  display(errors, target) {
    switch (target) {
      case 'notification':
        errors.forEach((error, i, errors) => {
          errors[i] = error + '<br>';
        });
        this.get('alerting').notify(errors, 'error', 'stand-alone');
        break;
      case 'box':
        return errors.join('<br>');
    }
  }
});
