import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artists', { path: '/' }, function() {
    this.route('show', { path: '/artists/:artist_id' }, function() {
      this.route('albums', { path: '/' });
    });
  });
});

export default Router;
