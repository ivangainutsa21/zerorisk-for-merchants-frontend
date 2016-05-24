import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.find('saq', params.saq_id);
  },
  afterModel(saq) {
    saq.get('answers');
    saq.get('questions');
  },
  actions: {
    selectquestion(question) {
      question.belongsTo('answer').reload();
      question.get('answer').then((answer) => {
        answer.set('responseType', 'NO!');
        answer.save();
      });
      // question.get('answer').save();
    }
  }
});
