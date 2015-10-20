import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'mastering-ember/tests/helpers/start-app';

module('Acceptance | Viewing artists', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /', function(assert) {
  server.create('artist', { name: "The Beatles" });

  visit('/');

  andThen(function() {
    assert.equal(find("a:contains('The Beatles')").length, 1);
  });
});
