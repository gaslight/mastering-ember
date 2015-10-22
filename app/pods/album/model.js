import DS from 'ember-data';
const { attr, belongsTo } = DS;

export default DS.Model.extend({
  name: attr('string'),
  artworkUrl: attr('string'),
  artist: belongsTo('artist')
});
