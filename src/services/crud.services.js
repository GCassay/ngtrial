// angular .module('services', [])
//         .service('service.trialCrud', function() {
//
//           var trials = ['trial 1', 'trial 2', 'trial 3'];
//
//           trialCreate = function() {
//             return trials;
//           }
//
//           this.trialRead = function() {
//
//           }
//
//           this.trialUpdate = function() {
//
//           }
//
//           this.trialDelete = function() {
//
//           }
//
//         });

angular .module('services', [])
        .factory('crud', function crudfunc(){
          return {
            trials : ['trial 1', 'trial 2', 'trial 3']
          }
        });
