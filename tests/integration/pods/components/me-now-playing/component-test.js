import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

let testTrack = Ember.Object.create({ name: "Test Track", audioUrl: '/fixtures/test-audio.mp3', duration: 60 });

moduleForComponent('me-player', 'Integration | Component | me-now-playing', {
  integration: true
});

test('it renders', function(assert) {
  let player = this.container.lookup('service:player');
  player.play(testTrack);

  this.render(hbs`{{me-now-playing}}`);

  assert.ok(this.$(":contains(Test Track)").length);
});
