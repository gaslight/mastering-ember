import Ember from 'ember';
let { inject, computed } = Ember;

export default Ember.Component.extend({
  classNames: ['now-playing'],
  showCurrentTime: true,

  player: inject.service(),

  track: computed.alias('player.track'),

  actions: {
    pause() {
      this.get('player').pause();
    },

    resume() {
      this.get('player').resume();
    }
  }
});
