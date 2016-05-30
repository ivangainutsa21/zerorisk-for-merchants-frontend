import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');

  this.route('dashboard', { path: '/' });

  this.route('saqs', { resetNamespace: true }, function() {
    this.route('edit', { path: ':saq_id/edit' });
  });

  this.route('scans', { resetNamespace: true }, function() {
    this.route('new');
  });

  this.route('ips', { resetNamespace: true }, function() {
    this.route('new');
  });

  this.route('scan', { resetNamespace: true }, function() {
    this.route('results');
  });

  this.route('enrollment', { resetNamespace: true }, function() {
    this.route('welcome');
    this.route('user-details');
    this.route('saq-detection');
  });
});

export default Router;
