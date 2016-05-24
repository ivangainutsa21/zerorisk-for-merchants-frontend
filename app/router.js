import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard');

  this.route('saqs', { resetNamespace: true }, function() {
    this.route('edit', { path: ':saq_id/edit' });
  });

  this.route('scans', function() {
    this.route('new');
  });

  this.route('ips', function() {
    this.route('new');
  });

  this.route('scan', function() {
    this.route('results');
  });

  this.route('enrollment', function() {
    this.route('welcome');
    this.route('user-details');
    this.route('saq-detection');
  });

});

export default Router;
