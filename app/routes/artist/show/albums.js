import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('album', { artist: this.modelFor('artist.show').get('id') });
  }
});
