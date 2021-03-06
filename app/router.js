import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artists', { path: "/" }, function() {
    this.route('show', { path: "artists/:id" }, function() {
      this.route('albums', { path: "/" });
      this.route('newAlbum', { path: "albums/new" });
    });
  });
});

export default Router;
