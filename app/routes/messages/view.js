import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import injectService from 'ember-service/inject';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  errorParser: injectService(),

  model(params) {
    return this.store.find('message', params.message_id)
  },

  actions: {
    downloadAttachment(activeMessage, fileName) {
      activeMessage.getAttachmentUrl({ fileName: fileName })
        .then((response) => window.location.assign(response.result.attachments.url))
        .catch((response) => {
          this.get('errorParser').parseAndDisplay(response, 'notification');
        });
    }
  }
});
