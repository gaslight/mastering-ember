import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {};
  },

  actions: {
    create() {
      var album = this.store.createRecord("album", this.currentModel)
      var artist = this.modelFor('artists.show');
      album.set("artist", artist);
      album.save().then( (album) =>{
        this.send("albumCreated");
      }, (error) => {
        console.log(error);
      });
    }
  }
});
