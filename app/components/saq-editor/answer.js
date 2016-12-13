import Ember from 'ember';
import injectService from 'ember-service/inject';

export default Ember.Component.extend({
  errorParser: injectService(),

  tagName: '',

  store: Ember.inject.service(),

  isEditingNotApplicable: false,
  isEditingCompensatingControls: false,
  activeCompensatingControlPoint: 'constraints',

  // Hooks
  didUpdateAttrs() {
    this.stopEditingNotApplicableAndCompensatingControlsIfEditing();
  },

  // Methoods
  saveAnswer(answer, answerType) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      answer.set('type', answerType);
      answer.save()
        .then(() => {
          this.stopEditingNotApplicableAndCompensatingControlsIfEditing();
          this.get('onSaveAnswer')();
          resolve();
        })
        .catch((response) => {
          this.get('errorParser').parseAndDisplay(response, 'notification');
          answer.rollbackAttributes();
          reject();
        });
    });
  },

  createAnswerIfDoesntExist(answerType) {
    return this.get('question').get('answer').then((answer) => {
      if (!answer) {
        console.time('saqAnwering');
        let created = this.get('store').createRecord('saqAnswer', { saq: this.get('question').get('saq'), question: this.get('question'), type: answerType });
        console.timeEnd('saqAnwering');
        return created;
      } else {
        return answer;
      }
    });
  },

  stopEditingNotApplicableAndCompensatingControlsIfEditing() {
    if (this.get('isEditingNotApplicable')) {
      this._stopEditingNotApplicable();
    }

    if (this.get('isEditingCompensatingControls')) {
      this._stopEditingCompensatingControls();
    }
  },

  _stopEditingNotApplicable() {
    this.get('okToLeaveSelectedQuestion')().then(ok => {
      if (ok) {
        this.set('isEditingNotApplicable', false);
      }
    });
  },

  _stopEditingCompensatingControls() {
    this.get('okToLeaveSelectedQuestion')().then(ok => {
      if (ok) {
        this.set('isEditingCompensatingControls', false);
        this.set('activeCompensatingControlPoint', 'constraints');
      }
    });
  },

  actions: {
    answer(answerType) {
      this.set('isLoading', true);
      this.createAnswerIfDoesntExist(answerType).then(answer => {
        this.saveAnswer(answer, answerType)
        .then(() => this.set('isLoading', false))
        .catch(() => this.set('isLoading', false));
      });
    },

    startEditingNotApplicable() {
      this.set('isEditingNotApplicable', true);
      this.createAnswerIfDoesntExist('NOT_APPLICABLE');
    },

    startEditingCompensatingControls() {
      this.set('isEditingCompensatingControls', true);
      this.createAnswerIfDoesntExist('COMPENSATING');
    },

    stopEditingNotApplicable() {
      this._stopEditingNotApplicable();
    },

    stopEditingCompensatingControls() {
      this._stopEditingCompensatingControls();
    }
  }
});
