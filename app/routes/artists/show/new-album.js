import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('album', { artist: this.modelFor('artists.show') });
  },

  actions: {
    save(model) {
      model.save().then((album) => {
        this.transitionTo('artists.show.albums', album.get('artist'));
      });
    }
  }
});

