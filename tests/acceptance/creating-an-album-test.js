import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'mastering-ember/tests/helpers/start-app';

module('Acceptance | Creating an album', {
  beforeEach: function() {
    this.application = startApp();
    server.create('artist', { id: 1, name: "The Beatles", albums: [2] });
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Viewing the albums list', function(assert) {
  visit("/artists/1/albums/new");

  fillIn('input', "New Album");

  click('button');

  andThen(function() {
    assertElementExists(".album-row h4:contains('New Album')");
    assert.equal(server.db.albums.length, 1);
  });
});
