import Ember from 'ember';
import config from './config/environment';
import paths from 'zerorisk-for-merchants/utils/paths';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: paths().rootURL()
});

Router.map(function() {
  this.route('login');

  this.route('enrollment', { resetNamespace: true }, function() {
    this.route('welcome');
    this.route('user-details');
    this.route('saq-detection');
  });

  this.route('dashboard', { path: '/' });

  this.route('saqs', { resetNamespace: true }, function() {
    this.route('edit', { path: ':saq_id/edit' });
  });

  this.route('scans', { resetNamespace: true }, function() {
    this.route('new');
    this.route('results', { path: ':scan_id/results' });
  });

  this.route('ips', { resetNamespace: true }, function() {
    this.route('new');
  });

  this.route('auth', function() {
    this.route('login-url', { path: 'login-url/:token' });
  });

  this.route('legal', function() {
    this.route('terms-of-use');
    this.route('privacy-policy');
  });
});

export default Router;
