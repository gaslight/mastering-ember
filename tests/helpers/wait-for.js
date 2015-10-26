import Ember from 'ember';
import QUnit from 'qunit';

export default function(object, property, callback) {
  QUnit.stop();

  return new Ember.RSVP.Promise(function(resolve, reject) {
    function observer() {
      clearTimeout(timeout);
      Ember.removeObserver(object, property, observer);
      if (callback) {
        Ember.run.next(callback);
      }

      Ember.run.next(function() {
        QUnit.start();
        resolve();
      });
    }

    Ember.addObserver(object, property, observer);

    var timeout = setTimeout(function() {
      QUnit.start();
      QUnit.push(false, null, null, "Timed out waiting for " + property + " of " + object + " to become truthy");
      Ember.run(function() {
        reject();
      });
    }, 3000);
  });
}
