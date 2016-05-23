import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.find('saq', 1);
  },
  afterModel(saq) {
    saq.get('answers');
    saq.get('questions');
  },
  actions: {
    selectquestion(question) {
      question.belongsTo('answer').reload();
      question.get('answer').then(answer => {
        answer.set('responseType', 'NO!');
        answer.save();
      });
      // question.get('answer').save();
    }
  }
});
