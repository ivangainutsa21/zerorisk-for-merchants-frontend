import Ember from 'ember';
import BusinessChannels from './../utils/business-channels';

export default Ember.Component.extend({
  errorParser: Ember.inject.service(),
  store: Ember.inject.service(),
  tagName: "form",

  isLoading: false,

  cantSave: Ember.computed.alias('model.validations.isInvalid'),

  availableBusinessChannels: Ember.computed(function() {
    this.get('store').pushPayload({
      businessChannels: Object.keys(BusinessChannels).map((key) => { return { id: BusinessChannels[key].id, name: key } })
    });
    return this.get('store').peekAll('business-channel');    
  }),

  submit() {
    this.sendAction('save');
  },

  actions: {
    save() {
      this.set('isLoading', true);
      this.get('model').save().then(() => {
        this.set('isLoading', false);
        this.get('onComplete')();
      }).catch((response) => {
        this.set('isLoading', false);
        this.get('errorParser').parseAndDisplay(response, 'notification');
      });
    }
  }
});
