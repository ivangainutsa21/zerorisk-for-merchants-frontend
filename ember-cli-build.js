/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var nodeSass = require('node-sass');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      // Pages main sass file + font-awesome
      includePaths: ['vendor/pages/scss', 'bower_components/font-awesome/scss'],
      nodeSass: nodeSass // node-sass@3.4.2
    },
    'ember-cli-bootstrap-sassy': {
      'glyphicons': false
    },
    babel: {      
      includePolyfill: true // for ember-concurrency
    }
  });

  // Pages
  app.import('vendor/pages/js/pages.js');
  // Pages icon css + font
  app.import('vendor/pages/css/pages-icons.css');
  app.import('vendor/pages/fonts/pages-icon/Pages-icon.woff', { destDir: 'fonts/pages-icon' });
  app.import('vendor/pages/fonts/pages-icon/Pages-icon.ttf', { destDir: 'fonts/pages-icon' });
  app.import('vendor/pages/fonts/pages-icon/Pages-icon.svg', { destDir: 'fonts/pages-icon' });
  app.import('vendor/pages/fonts/pages-icon/Pages-icon.eot', { destDir: 'fonts/pages-icon' });
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
