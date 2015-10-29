import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';
import waitFor from 'mastering-ember/tests/helpers/wait-for';

let testTrack = Ember.Object.create({ audioUrl: '/fixtures/test-audio.mp3', duration: 60 });

moduleFor('service:player', 'Unit | Service | player', {});

test("player service is defined", function(assert) {
  let player = this.subject();
  assert.ok(player instanceof Ember.Service);
});

test("creating the audioElement on init", function(assert) {
  let player = this.subject();
  assert.ok(player.get('audioElement') instanceof HTMLElement);
  assert.equal(player.get('audioElement.tagName'), "AUDIO");
});

test("pausing the audioElement on destroy", function(assert) {
  let player = this.subject();
  Ember.run(player, 'willDestroy');
  assert.ok(player.get('audioElement.paused'));
  assert.equal(player.get('audioElement').src, "");
});

test("play(testTrack)", function(assert) {
  let player = this.subject();
  player.play(testTrack);
  waitFor(player, 'isPlaying', function() {
    assert.ok(player.get('audioElement.src').includes(testTrack.get('audioUrl')));
    assert.equal(player.get('track'), testTrack);
  });
});

test("pause()", function(assert) {
  let player = this.subject();
  player.pause();
  assert.ok(player.get('audioElement.paused'), true);
});

test("resume()", function(assert) {
  let player = this.subject();
  player.play(testTrack);
  player.pause();
  player.resume();
  waitFor(player, 'isPlaying', function() {
    assert.equal(player.get('track'), testTrack);
  });
});

test("currentTime", function(assert) {
  let player = this.subject();
  player.play(testTrack);
  waitFor(player, 'currentTime', function() {
    assert.equal(player.get('currentTime'), 1);
  });
});

test("remainingTime", function(assert) {
  let player = this.subject();
  player.play(testTrack);
  waitFor(player, 'currentTime', function() {
    assert.equal(player.get('remainingTime'), 59);
  });
});
