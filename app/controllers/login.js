import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  errorParser: Ember.inject.service(),

  isLoading: false,

  actions: {
    authenticate: function() {
      this.set('isLoading', true);
      this.set('error', null);
      var credentials = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:cookie', credentials).then(
        () => {
          this.set('error', null);
          this.set('isLoading', false);
        },
        response => {
          this.set('isLoading', false);
          this.set('error', this.get('errorParser').parseAndDisplay(response, 'box'));
        }
      );
    }
  }
});
