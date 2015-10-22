import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.name.findName,
  artworkUrl: faker.image.imageUrl,
  artist: null
});

