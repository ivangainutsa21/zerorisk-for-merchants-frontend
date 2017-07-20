/* eslint-env node */

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'zerorisk-for-merchants',
    environment,
    rootURL: '/',
    locationType: 'auto',
    'ember-simple-auth':  {
      authenticationRoute: 'login',
      routeAfterAuthentication: 'dashboard',
      routeIfAlreadyAuthenticated: 'dashboard'
    },
    'ember-cli-mirage': {
      enabled: false
    },
    i18n: {
      defaultLocale: 'en'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
    // DS: {
    //   host: '',//'http://localhost:8080', // default for development 
    //   namespace: 'api/v2' // default for every target
    // }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    //ENV.DS.host = 'https://test.merchant.zerorisk.io/';
  }

  if (environment === 'demo') {
    // ENV.DS.host = 'https://demo.merchant.zerorisk.io/';
  }

  if (environment === 'production') {
    // ENV.DS.host = 'https://merchant.zerorisk.io/';
  }

  return ENV;
};
