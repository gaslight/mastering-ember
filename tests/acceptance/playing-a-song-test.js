import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'mastering-ember/tests/helpers/start-app';

module('Acceptance | Playing a Song', {
  beforeEach: function() {
    this.application = startApp();
    server.create('artist', { id: 1, name: "The Beatles", albums: [2] });
    server.create('album', { id: 2, name: "Abbey Road", artworkUrl: "/fixtures/test-artwork.jpg", artist: 1, songs: [3] });
    server.create('track', { id: 3, name: "Come Together", album: 2 });
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Viewing the albums list', function() {
  visit("/artists/1");

  click("tr:contains('Come Together')");

  andThen(function() {
    assertElementExists(".now-playing img[src='/fixtures/test-artwork.jpg']");
    assertElementExists(".now-playing:contains('Come Together')");
  });

  click(".glyphicon-pause");

  andThen(function() {
    assertElementExists(".now-playing .glyphicon-play");
  });
});
