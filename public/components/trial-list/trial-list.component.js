// trial-list.component.js

angular .module('trialList', ['trialBlock'])
        .component('trialList', {

          templateUrl: './components/trial-list/trial-list.template.html',

          bindings: {
            readTrials: '=',
            updateTrials: '=',
            removeTrial: '=',
            trials: '='
          },

          controller: listControllerFunc

        });

function listControllerFunc(){

  var vm = this;

  vm.readTrials();

  // Show/Hide trial blocks
  vm.toggleBlock = function(id) {
    this.activeTrial = (this.activeTrial !== id) ? id : null;
  }
}
