import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.name.findName,
  artworkUrl: "/fixtures/test-artwork.jpg",
  artist: null
});

