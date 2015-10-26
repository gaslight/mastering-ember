import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.name.findName,
  bannerUrl: "/fixtures/test-banner.jpg",
  thumbnailUrl: "/fixtures/test-thumbnail.jpg",
  albums: []
});

