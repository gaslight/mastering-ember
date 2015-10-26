import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    let artists = this.modelFor('artists');
    if (artists.get('length') > 0) {
      this.replaceWith('artists.show', artists.get('firstObject'))
    }
  }
});

