import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard');
  this.route('scans', function() {
    this.route('new');
  });
  this.route('ips', function() {
    this.route('new');
  });

  this.route('scan', function() {
    this.route('results');
  });
});

export default Router;
