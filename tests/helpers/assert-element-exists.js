import Ember from 'ember';
import QUnit from 'qunit';

export default Ember.Test.registerHelper('assertElementExists', function(app, selector) {
  QUnit.assert.ok(!!findWithAssert(selector).length);
});
