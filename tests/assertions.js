import Ember from 'ember';

export function waitFor(object, property, callback) {
  stop();

  return new Ember.RSVP.Promise(function(resolve, reject) {
    function observer() {
      clearTimeout(timeout);
      Ember.removeObserver(object, property, observer);
      if (callback) {
        Ember.run.next(callback);
      }

      Ember.run.next(function() {
        start();
        resolve();
      });
    }

    Ember.addObserver(object, property, observer);

    var timeout = setTimeout(function() {
      start();
      QUnit.push(false, null, null, "Timed out waiting for " + property + " of " + object + " to become truthy");
      Ember.run(function() {
        reject();
      });
    }, 3000);
  });
}
