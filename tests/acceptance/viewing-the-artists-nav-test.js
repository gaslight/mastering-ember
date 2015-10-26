import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'mastering-ember/tests/helpers/start-app';

module('Acceptance | Viewing the artists nav', {
  beforeEach: function() {
    this.application = startApp();
    server.create('artist', { id: 1, name: "The Beatles", albums: [2] });
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Viewing the artists list', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find("a:contains('The Beatles')").length, 1);
  });
});
