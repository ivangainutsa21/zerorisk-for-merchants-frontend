import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  didInsertElement() {
    Ember.$.Pages.initScrollBarPlugin();
  },
  // sections: Ember.computed.uniq('_sections'),
  // _sections: Ember.computed('saq.questions.[]', function() {
  // 	return this.get('saq.questions').mapBy('section');
  // })
});
