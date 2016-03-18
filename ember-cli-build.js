/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: ['vendor/pages/scss']
    }
  });

  // Pages
  app.import('vendor/pages/js/pages.min.js');
  // Pages icon css + font
  app.import('vendor/pages/css/pages-icons.css');
  app.import('vendor/pages/fonts/pages-icon/Pages-icon.woff', { destDir: 'font/pages-icon'  });
  app.import('vendor/pages/fonts/pages-icon/Pages-icon.ttf', { destDir: 'font/pages-icon'  });
  app.import('vendor/pages/fonts/pages-icon/Pages-icon.svg', { destDir: 'font/pages-icon'  });
  app.import('vendor/pages/fonts/pages-icon/Pages-icon.eot', { destDir: 'font/pages-icon'  });
  // Pages monsterrat font
  app.import('vendor/pages/fonts/montserrat/Pages-icon.woff', { destDir: 'font/montserrat'  });
  app.import('vendor/pages/fonts/montserrat/Pages-icon.ttf', { destDir: 'font/montserrat'  });
  app.import('vendor/pages/fonts/montserrat/Pages-icon.svg', { destDir: 'font/montserrat'  });
  app.import('vendor/pages/fonts/montserrat/Pages-icon.eot', { destDir: 'font/montserrat'  });
  // jquery.scrollbar
  app.import('bower_components/jquery.scrollbar/jquery.scrollbar.min.js');
  app.import('bower_components/jquery.scrollbar/jquery.scrollbar.css');
  // Modernizr
  app.import('vendor/pages_assets/plugins/modernizr.custom.js');

  return app.toTree();
};
