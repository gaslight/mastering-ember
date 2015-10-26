import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'mastering-ember/tests/helpers/start-app';

module('Acceptance | Playing a Song', {
  beforeEach: function() {
    this.application = startApp();
    server.create('artist', { id: 1, name: "The Beatles", albums: [2] });
    server.create('album', { id: 2, name: "Abbey Road", artist: 1, songs: [3] });
    server.create('track', { id: 3, name: "Come Together", album: 2 });
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Viewing the albums list', function(assert) {
  visit("/artists/1");
  click("a:contains('Come Together')");

  andThen(function() {
    assert.equal(find(".now-playing:contains('Come Together')").length, 1);
  });

  click(".glyphicon-pause");

  andThen(function() {
    assert.equal(find(".glyphicon-play").length, 1);
  });
});
