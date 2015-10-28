import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let testTrack = Ember.Object.create({ name: "So What", audioUrl: '/fixtures/test-audio.mp3' });

moduleForComponent('me-track-row', 'Integration | Component | me track row', {
  integration: true
});

test('rendering the track name', function(assert) {
  this.set('testTrack', testTrack);
  this.render(hbs`{{me-track-row track=testTrack}}`);
  assert.equal(this.$("td:contains('So What')").length, 1, "a td contains 'So What'");
});

test('clicking a track row', function(assert) {
  this.set('testTrack', testTrack);
  this.render(hbs`{{me-track-row track=testTrack}}`);

  assert.ok(!this.$('.track-row').hasClass('playing'));
  this.$('.track-row').click();
  assert.ok(this.$('.track-row').hasClass('playing'), "clicking adds the `playing` class");
  assert.ok(this.$('.glyphicon.glyphicon-volume-up').length, "clicking adds a speaker icon");
});
