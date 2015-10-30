import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.createRecord("artist");
  },

  actions: {
    create(model) {
      model.save().then((artist) => {
        this.send("refreshArtists");
        this.transitionTo("artists.show", artist);
      });
    }
  }
});
