import Ember from 'ember';

export default Ember.Component.extend({
  // Attrs
  tagName: 'div',
  classNames: 'alert alert-warning',
  isVisible: Ember.computed.notEmpty('errors'),
});
