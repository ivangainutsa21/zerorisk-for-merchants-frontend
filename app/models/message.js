import Ember from 'ember';
import DS from 'ember-data';
import { modelAction } from 'ember-custom-actions';

const $ = Ember.$;

export default DS.Model.extend({
  subject: DS.attr('string'),
  body: DS.attr('string'),
  preview: Ember.computed('body', function () {
    return $(this.get('body')).text();
  }),
  recipientType: DS.attr('string'),
  created: DS.attr('date'),
  user: DS.belongsTo('user'),
  entity: DS.belongsTo('entity'),
  segment: DS.belongsTo('user'),
  segmentName: DS.attr('string'),
  attachments: DS.attr(),

  // Actions
  getAttachmentUrl: modelAction('getAttachmentUrl', { promiseType: 'object', type: 'POST' }),
});
