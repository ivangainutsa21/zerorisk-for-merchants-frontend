import Ember from 'ember';
const { computed, get, set } = Ember;

export default Ember.Component.extend({
  // Attrs
  wizardId: null,
  currentQuestionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius facilisis volutpat. Maecenas at felis sed ante ornare elementum. Duis imperdiet, sem ut luctus rhoncus, sapien augue interdum est, id gravida elit libero et lectus. Sed tempor efficitur eleifend. Donec sodales neque orci, ut vehicula velit fermentum a.',
  currentAnswerObject: Ember.A([{"text": "eCommerce Website", "bringsTo": 53}, {"text": "eTerminal", "bringsTo": 58}, {"text": "Batch Transactions", "bringsTo": 54}, {"text": "DirectLink for eCommerce", "bringsTo": 55}]),
  currentAnswerType: 'multiple-answer',


  // CPs
  answerComponent: computed('currentAnswerType', function() {
    return `text-wizard/${get(this, 'currentAnswerType')}`;
  }),

  currentQuestionHasQuestionMark: computed('currentQuestionText', function() {
    return get(this, 'currentQuestionText').indexOf('?') !== -1;
  }),

  // Actions
  actions: {
    answer() {
      set(this, 'currentQuestionText', "AHAALLALALALALALA ?");
      set(this, 'currentAnswerObject', Ember.A([{"text": "eCommerce Static Template (payment page fully hosted by Ingenico)", "bringsTo": 56}, {"text": "eCommerce Static Template (payment page partially hosted by Ingenico with some elements hosted by your eCommerce website, e.g. CSS & Javascript components)", "bringsTo": 57}, {"text": "eCommerce Dynamic Template (payment page partially hosted by your eCommerce website)", "bringsTo": 57}, {"text": "Integration via Magento", "bringsTo": 56}, {"text": "Integration via Oxyd", "bringsTo": 56}, {"text": "Integration via DemandWare", "bringsTo": 57}, {"text": "Integration via Hybris", "bringsTo": 57}]));
    }
  }
});
