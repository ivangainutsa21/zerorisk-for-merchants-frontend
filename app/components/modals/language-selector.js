import Ember from 'ember';
import injectService from 'ember-service/inject';
const { getOwner, computed } = Ember;

export default Ember.Component.extend({
  i18n: injectService(),
  preferences: injectService(),
  navi: injectService(),

  activeLocale: Ember.computed.alias('i18n.locale'),

  locales: Ember.computed('i18n.locale', 'i18n.locales', function () {
    const i18n = this.get('i18n');
    return this.get('i18n.locales').map(function (loc) {
      return { id: loc, text: i18n.t('locales.' + loc) };
    });
  }),

  actions: {
    setLocale(locale) {
      this.set('i18n.locale', locale);
      this.set('preferences.locale', locale);      
      
      const currentRouteModel = this.get('navi.applicationRoute').modelFor(this.get('navi.currentRouteName'));
      if (currentRouteModel && typeof currentRouteModel.reload === "function") {
        currentRouteModel.reload();
      }
    }
  }
});
