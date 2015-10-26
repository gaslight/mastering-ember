import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {};
  },

  actions: {
    create() {
      this.store.createRecord("artist", this.currentModel).save( (artist) =>{
        this.transitionTo("artists.show", artist);
      });
    }
  }
});
