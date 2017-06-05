/* eslint-env node */
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app'); 
var deployTarget = process.env.DEPLOY_TARGET;
var fingerprintUrl;    

switch(deployTarget) {
  case 'production':
    fingerprintUrl = "https://d3y8urx7pl70.cloudfront.net/";
    break;
  case 'demo':
    fingerprintUrl = "https://d34uw3u0sbeeqo.cloudfront.net/";
    break;
  default: 
    fingerprintUrl = "https://d34uw3u0sbeeqo.cloudfront.net/";
    break;
}

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      // Pages main sass file + font-awesome
      includePaths: ['vendor/pages/scss', 'bower_components/font-awesome/scss']
    },
    'ember-cli-bootstrap-sassy': {
      'glyphicons': false
    },
    babel: {      
      includePolyfill: true // for ember-concurrency
    },
    fingerprint: {
      prepend: fingerprintUrl,
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map', 'svg']
    }
  });

  // Pages
  app.import('vendor/pages/js/pages.js');
  app.import('vendor/pages/js/ui/sidebar.js');
  app.import('vendor/pages/js/ui/notification.js');
  // Pages icon css + font
  app.import('vendor/pages/css/pages-icons.css');
  app.import('vendor/pages/fonts/pages-icon/Pages-icon.woff', { destDir: 'fonts/pages-icon' });
  app.import('vendor/pages/fonts/pages-icon/Pages-icon.ttf', { destDir: 'fonts/pages-icon' });
  app.import('vendor/pages/fonts/pages-icon/Pages-icon.svg', { destDir: 'fonts/pages-icon' });
  app.import('vendor/pages/fonts/pages-icon/Pages-icon.eot', { destDir: 'fonts/pages-icon' });
  // Montserrat font
  app.import('vendor/pages/fonts/montserrat/Montserrat-Regular.ttf', { destDir: 'fonts/montserrat' });
  app.import('vendor/pages/fonts/montserrat/Montserrat-Bold.ttf', { destDir: 'fonts/montserrat' });
  app.import('vendor/pages/fonts/montserrat/montserrat-regular-webfont.svg', { destDir: 'fonts/montserrat' });
  app.import('vendor/pages/fonts/montserrat/montserrat-bold-webfont.svg', { destDir: 'fonts/montserrat' });
  // Font-Awesome font
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.oet', { destDir: 'fonts/font-awesome' });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.svg', { destDir: 'fonts/font-awesome' });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf', { destDir: 'fonts/font-awesome' });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff', { destDir: 'fonts/font-awesome' });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2', { destDir: 'fonts/font-awesome' });
  // Modernizr (pages customized version)
  app.import('vendor/pages_assets/plugins/modernizr.custom.js');
  // Select2
  app.import('vendor/pages_assets/plugins/bootstrap-select2/select2.min.js');
  app.import('vendor/pages_assets/plugins/bootstrap-select2/select2.css');
  // DataTables (CSS only)
  app.import('vendor/pages_assets/plugins/jquery-datatable/media/css/dataTables.bootstrap.min.css');

  // app.import('bower_components/select2/dist/js/select2.min.js');
  // app.import('bower_components/select2/dist/css/select2.min.css');
  // jquery.scrollbar
  app.import('bower_components/jquery.scrollbar/jquery.scrollbar.min.js');
  app.import('bower_components/jquery.scrollbar/jquery.scrollbar.css');

  return app.toTree();
};
