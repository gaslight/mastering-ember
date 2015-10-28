import Ember from 'ember';

export function meDuration(input = 0) {
  let date = new Date(input * 1000);
  return date.toISOString().substr(14, 5);
}

export default Ember.Helper.helper(meDuration);
