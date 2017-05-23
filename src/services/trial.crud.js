angular .module('appTrial', [])
        .service('trialCrud', function() {

          var trials = ['trial 1', 'trial 2', 'trial 3'];

          this.trialCreate = function() {
            return trials;
          }

          this.trialRead = function() {

          }

          this.trialUpdate = function() {

          }

          this.trialDelete = function() {

          }

        });
