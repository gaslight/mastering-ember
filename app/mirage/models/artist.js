import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  name: faker.name.findName,
  bannerUrl: faker.image.imageUrl,
  thumbnailUrl: faker.image.imageUrl,
  albums: hasMany()
});

