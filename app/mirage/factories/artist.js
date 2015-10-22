import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.name.findName,
  bannerUrl: faker.image.imageUrl,
  thumbnailUrl: faker.image.imageUrl,
  albums: []
});
