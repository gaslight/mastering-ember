import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'mastering-ember/tests/helpers/start-app';

module('Acceptance | Viewing an artist', {
  beforeEach: function() {
    this.application = startApp();
    server.create('artist', { id: 1, name: "The Beatles", bannerUrl: "/fixtures/test-banner.jpg" });
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Visiting the artists url', function() {
  visit("/artists/1");

  andThen(function() {
    assertElementExists(".banner img[src='/fixtures/test-banner.jpg']");
    assertElementExists(".banner h1:contains('The Beatles')");
  });
});

test('Clicking the artist link', function() {
  visit("/");

  click(".artist-link:contains('The Beatles')");

  andThen(function() {
    assertElementExists(".banner img[src='/fixtures/test-banner.jpg']");
    assertElementExists(".banner h1:contains('The Beatles')");
  });
});

