import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'mastering-ember/tests/helpers/start-app';

module('Acceptance | Viewing an artists albums', {
  beforeEach: function() {
    this.application = startApp();
    server.create('artist', { id: 1, name: "The Beatles", albums: [2] });
    server.create('album', { id: 2, name: "Abbey Road", artworkUrl: "/fixtures/test-artwork.jpg", artist: 1, songs: [3] });
    server.create('track', { id: 3, name: "Come Together", duration: 123, album: 2 });
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Vising the artists url', function() {
  visit("/artists/1");

  andThen(function() {
    assertElementExists(".album-row img[src='/fixtures/test-artwork.jpg']");
    assertElementExists("table.table td:contains('Come Together')");
    assertElementExists("table.table td:contains('2:03')");
  });
});

