import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('artist').then((artists) => {
      return artists.filter((artist) => !artist.get("isNew"));
    });
  },
  
  actions: {
    refreshArtists() {
      this.refresh();
    }
  }
});
