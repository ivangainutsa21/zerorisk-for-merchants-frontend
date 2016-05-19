import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.find('saq', 1);
  },
  afterModel(saq) {
    // let answers =
    //saq.get('answers');
    // let questions =
    saq.get('questions');
  },
  actions: {
    selectquestion(question) {
      question.get('answer');
    }
  }
});
