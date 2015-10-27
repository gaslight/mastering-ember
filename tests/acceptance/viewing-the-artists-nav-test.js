import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'mastering-ember/tests/helpers/start-app';

module('Acceptance | Viewing the artists nav', {
  beforeEach: function() {
    this.application = startApp();
    server.create('artist', { id: 1, name: "John Coltrane", thumbnailUrl: "/fixtures/test-thumbnail.jpg" });
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Viewing the artists list', function() {
  visit('/');

  andThen(function() {
    assertElementExists("a.artist-link:contains('John Coltrane')");
    assertElementExists("a.artist-link img[src='/fixtures/test-thumbnail.jpg']");
  });
});
