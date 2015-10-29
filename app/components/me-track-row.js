import Ember from 'ember';
let { inject, computed } = Ember;

export default Ember.Component.extend({
  tagName: 'tr',
  classNames: ['track-row'],
  classNameBindings: ['isPlaying:playing'],

  player: inject.service(),

  isPlaying: computed('player.track', 'track', function() {
    return this.get('player.track') === this.get('track');
  }),

  click() {
    this.get('player').play(this.get('track'));
  }
});
