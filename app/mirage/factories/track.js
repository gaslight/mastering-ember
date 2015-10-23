import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) { return `Test Track ${i}`; },
  sequence(i) { return i; },
  duration: 100,
  audioUrl: "http://example.com/audio.mp3",
  album: null
});

