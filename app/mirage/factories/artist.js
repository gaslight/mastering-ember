import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.name.findName,
  imageUrl: faker.image.imageUrl,
  thumbnailUrl: faker.image.imageUrl
});

