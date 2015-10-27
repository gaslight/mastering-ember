import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('album', { artist: this.modelFor('artists.show').get('id') });
  },
  actions: {
    albumCreated() {
      this.refresh();
    }
  }
});
