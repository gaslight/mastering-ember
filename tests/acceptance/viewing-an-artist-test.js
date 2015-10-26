import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'mastering-ember/tests/helpers/start-app';

module('Acceptance | Viewing an artist', {
  beforeEach: function() {
    this.application = startApp();
    server.create('artist', { id: 1, name: "The Beatles", albums: [2] });
    server.create('album', { id: 2, name: "Abbey Road", artworkUrl: "/fixtures/test-artwork.jpg", artist: 1 });
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Viewing the albums list', function() {
  visit("/artists/1");

  andThen(function() {
    assertElementExists("img[src='/fixtures/test-artwork.jpg']");
    assertElementExists("h4:contains('Abbey Road')");
  });
});

