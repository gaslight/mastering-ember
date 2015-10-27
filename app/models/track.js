import DS from 'ember-data';
const { attr, belongsTo } = DS;

export default DS.Model.extend({
  name: attr('string'),
  sequence: attr('number'),
  duration: attr('number'),
  audioUrl: attr('string'),
  album: belongsTo('album')
});
