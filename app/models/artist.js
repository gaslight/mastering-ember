import DS from 'ember-data';
const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  bannerUrl: attr('string'),
  thumbnailUrl: attr('string'),
  albums: hasMany('album')
});
