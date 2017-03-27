import Ember from 'ember';
const { computed, get, set, isEmpty } = Ember;
import injectService from 'ember-service/inject';

export default Ember.Component.extend({
  ajax: injectService(),
  routing: injectService('-routing'),
  alerting: injectService(),
  errorParser: injectService(),

  // Attrs
  wizardId: null,
  // currentQuestionId: null,
  // previousQuestionId: null,
  questionIdsHistory: [],
  answersHistory: [],
  currentQuestion: Ember.Object.create(),
  currentAnswer: Ember.Object.create(),
  isLoading: false,

  // CPs
  answerComponent: computed('currentAnswer.type', function() {
    if (!isEmpty(get(this, 'currentAnswer.type'))) {
      return `text-wizard/${get(this, 'currentAnswer.type')}`;
    } else {
      return false;
    }
  }),

  currentQuestionHasQuestionMark: computed('currentQuestion.text', function() {
    if (!isEmpty(get(this, 'currentQuestion.text'))) {
      return get(this, 'currentQuestion.text').indexOf('?') !== -1;
    } else {
      return false;
    }
  }),

  currentQuestionId: computed('questionIdsHistory.[]', function() {
    let questionIdsHistory = get(this, 'questionIdsHistory');
    return questionIdsHistory.get('lastObject');
  }),

  previousQuestionId: computed('questionIdsHistory.[]', function() {
    let questionIdsHistory = get(this, 'questionIdsHistory');
    if (questionIdsHistory && questionIdsHistory.get('length') >= 2) {
      return questionIdsHistory.objectAt(questionIdsHistory.get('length') - 2);
    } else {
      return false;
    }
  }),

  canGoBack: computed('currentQuestionId', 'previousQuestionId', function() {
    return get(this, 'previousQuestionId') && (get(this, 'currentQuestionId') !== get(this, 'previousQuestionId'));
  }),

  // Hooks
  didInsertElement() {
    this.startWizard();
  },

  // Methods
  startWizard() {
    //set(this, 'questionIdsHistory', Ember.A([]));
    this.set('isLoading', true);
    this.get('ajax').post(`/Wizard/Create?wizardId=${get(this, 'wizardId')}`).then(response => {
      this.set('isLoading', false);
      this.setCurrentQuestionAndAnswer(response.result);
    }).catch(response => {
      this.set('isLoading', false); 
      this.get('errorParser').parseAndDisplay(response, 'notification')
    });
  },

  goToQuestionId(questionId) {
    this.set('isLoading', true);
    this.get('ajax').post(`/Wizard/InProgress?userAnswerId=${questionId}`)
      .then(response => {
        this.set('isLoading', false);
        if (questionId !== 0) {
          this.setCurrentQuestionAndAnswer(response.result);
        } else {
          // End of the wizard
          let onGoalAction = JSON.parse(response.result.wizardView.onGoalAction);
          switch (onGoalAction.action) {
            case 'OPEN_DASHBOARD':
              this.get('onWizardComplete')();
              // TODO: use router public api when it becomes available
              this.get('routing').transitionTo('dashboard');
              break;
            case 'OPEN_SAQ':                            
              this.get('alerting').notify("Opening SAQ..", 'success', 'bottom-right-toast');
              this.get('onWizardComplete')();
              // TODO: use router public api when it becomes available
              this.get('routing').transitionTo('saqs.edit', [onGoalAction.objectId]);
              break;
            default:
              alert("Work in Progress: unhandled action.");
          }
        }
      })
      .catch(response => {
        this.set('isLoading', false);
        this.get('errorParser').parseAndDisplay(response, 'notification')
      });
  },

  setCurrentQuestionAndAnswer(hash) {
    // Question
    // if we are agoing to the first id in questionIdsHistory,
    // that means that we are resetting the wizard and going back to the first question of it,
    // so we'll reset its history
    if (hash.wizardActualQuestion === get(this, 'questionIdsHistory').get('firstObject')) {
      get(this, 'questionIdsHistory').clear();
    }
    get(this, 'questionIdsHistory').addObject(hash.wizardActualQuestion);
    set(this, 'currentQuestion.text', hash.wizardView.text);
    set(this, 'currentQuestion.info', hash.wizardView.info);
    set(this, 'currentQuestion.id', hash.wizardActualQuestion);

    // Answer
    if (hash.wizardView.answerType === "YES_NO") {
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
    answer(destinationQuestionId, choiceId) {      
      // Build answer history
      const currentQuestionId = get(this, 'currentQuestion.id');
      if (get(this, 'currentAnswer.type') == "yes-no-answer") {
        get(this, 'answersHistory').push({ questionId: currentQuestionId, answerId: destinationQuestionId, choiceId: null});
      } else if (get(this, 'currentAnswer.type') == "multiple-answer") { 
        get(this, 'answersHistory').push({ questionId: currentQuestionId, answerId: null, choiceId: choiceId });
      }

      this.goToQuestionId(destinationQuestionId);
    },

    goBack() {
      this.goToQuestionId(get(this, 'previousQuestionId'));
      get(this, 'questionIdsHistory').popObject();
    }
  }
});
