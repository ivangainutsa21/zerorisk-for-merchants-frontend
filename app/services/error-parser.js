import Ember from 'ember';

export default Ember.Service.extend({
  alerting: Ember.inject.service(),

  parseAndDisplay(response, target) {
    return this.display(this.parse(response), target);
  },

  parse(response) {
    // Enter a world of madness
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
          } else if (error.status && error.status == 0) {
            errors.push("Can't contact the server. Your browser probably lost connection.");              
          } else if (error.detail) {
            errors.push(error.detail);
            // old format
          } else {
            errors.push(error.error);
          }
        });
      // even older ofrmat
      } else if (response.result && response.result.errors) {
        errors.push(response.result.errors[0].error);
      // Encarta '97 format 
      } else if (response.error) {
        errors.push(response.error);
      } else {
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
