import { meDuration } from '../../../helpers/me-duration';
import { module, test } from 'qunit';

module('Unit | Helper | me-duration');

test('with undefined', function(assert) {
  assert.equal(meDuration(undefined), "00:00");
});

test('with less than one minute', function(assert) {
  assert.equal(meDuration(30), "00:30");
});

test('with greater than one minute', function(assert) {
  assert.equal(meDuration(90), "01:30");
});
