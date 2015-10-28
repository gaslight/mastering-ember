import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNames: ['track-row'],
  classNameBindings: ['isPlaying:playing'],

  isPlaying: false,

  click() {
    this.toggleProperty('isPlaying');
  }
});
