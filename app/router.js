import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artist', { path: '/' }, function() {
    this.route('show', { path: '/artists/:id' });
  });
});

export default Router;
