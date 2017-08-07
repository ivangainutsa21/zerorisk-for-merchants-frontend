export default {
  name: 'i18n',
  initialize: function ({ container }) {
    let i18n = container.lookup('service:i18n'),
      preferences = container.lookup('service:preferences');

    i18n.set('locale', calculateLocale(i18n.get('locales'), preferences));
  }
}

function calculateLocale(locales, preferences) {
  let language = preferences.get('locale') || (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

  if (language == "en-GB" || language == "en-US" || language == "en-EN" || language == "en-EN") {
    language = "en";
  }
  else if (language == "fr-FR" || language == "fr-BE" || language == "fr-CA") {
    language = "fr";
  }
  else if (language == "nl-NL" || language == "nl-BE") {
    language = "nl";
  }

  return locales.indexOf(language) >= 0 ? language : 'en';
  //return ocales.includes(language) ? language : 'en';
}