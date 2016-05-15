import Ember from 'ember';
const { computed, get, set, setProperties, isEmpty } = Ember;

export default Ember.Component.extend({
  ajax: Ember.inject.service(),

  // Attrs
  wizardId: null,
  // questionIdsHistory: Ember.A([]),
  currentQuestionId: null,
  previousQuestionId: null,
  // currentQuestionText: "",//'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius facilisis volutpat. Maecenas at felis sed ante ornare elementum. Duis imperdiet, sem ut luctus rhoncus, sapien augue interdum est, id gravida elit libero et lectus. Sed tempor efficitur eleifend. Donec sodales neque orci, ut vehicula velit fermentum a.',
  // //currentAnswerObject: Ember.A([{"text": "eCommerce Website", "bringsTo": 53}, {"text": "eTerminal", "bringsTo": 58}, {"text": "Batch Transactions", "bringsTo": 54}, {"text": "DirectLink for eCommerce", "bringsTo": 55}]),
  // currentAnswerType: null, //'multiple-answer',

  currentQuestion: Ember.Object.create(),
  currentAnswer: Ember.Object.create(),


  // CPs
  answerComponent: computed('currentAnswer.type', function() {
    if(!isEmpty(get(this, 'currentAnswer.type'))) {
      return `text-wizard/${get(this, 'currentAnswer.type')}`;
    } else {
      return false;
    }
  }),

  // currentQuestionId: computed('questionIdsHistory', function() {
  //   let questionIdsHistory = get(this, 'questionIdsHistory');
  //   return questionIdsHistory[questionIdsHistory-1];
  // }),

  currentQuestionHasQuestionMark: computed('currentQuestion.text', function() {
    if(!isEmpty(get(this, 'currentQuestion.text'))) {
      return get(this, 'currentQuestion.text').indexOf('?') !== -1;
    } else {
      return false;
    }
  }),

  // Hooks
  didInsertElement() {
    this.initWizard();
  },

  // Methods
  initWizard() {
    this.get('ajax').post(`/Wizard/Create?wizardId=${get(this, 'wizardId')}`).then(response => {
        console.log(response);
        this.setCurrentQuestionAndAnswer(response.result);
    });
  },

  goToQuestionId(questionId) {
    this.get('ajax').post(`/Wizard/InProgress?userAnswerId=${questionId}`).then(response => {
        console.log(response);
        this.setCurrentQuestionAndAnswer(response.result);
    });
  },

  setCurrentQuestionAndAnswer(hash) {
    // Question
    set(this, 'currentQuestionId', hash.wizardActualQuestion);
    set(this, 'previousQuestionId', hash.wizardView.previousQuestionId);
    set(this, 'currentQuestion.text', hash.wizardView.text);

    // Answer
    if(hash.wizardView.answerType === "YES_NO") {
      set(this, 'currentAnswer.type', 'yes-no-answer');
      set(this, 'currentAnswer.yesBringsTo', hash.wizardView.yesBringsTo);
      set(this, 'currentAnswer.noBringsTo', hash.wizardView.noBringsTo);
    }
    else if (hash.wizardView.answerType === "CHOICE") {
      set(this, 'currentAnswer.type', 'multiple-answer');
      set(this, 'currentAnswer.multiples', JSON.parse(hash.wizardView.choiceBringsTo));
    }
  },

  // Actions
  actions: {
    answer(destinationQuestionId) {
      this.goToQuestionId(destinationQuestionId);
    }
  }
});
