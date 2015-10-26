import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import waitFor from 'mastering-ember/tests/helpers/wait-for';

let testTrack = Ember.Object.create({ name: "So What", audioUrl: '/fixtures/test-audio.mp3' });

moduleForComponent('me-track-row', 'Integration | Component | me track row', {
  integration: true
});

test('rendering the track name', function(assert) {
  this.set('testTrack', testTrack);
  this.render(hbs`{{me-track-row track=testTrack}}`);

  assert.equal(this.$("td:contains('So What')").length, 1, "a td contains 'So What'");
});

test('playing the track when clicked', function(assert) {
  let player = this.container.lookup('service:player');
  this.set('testTrack', testTrack);
  this.render(hbs`{{me-track-row track=testTrack}}`);
  this.$('td').click();

  waitFor(player, 'isPlaying', function() {
    assert.deepEqual(player.get('track'), testTrack);
  });
});
