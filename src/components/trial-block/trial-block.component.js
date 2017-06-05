// trial-block.component.js

angular .module('trialBlock')
        .component('trialBlock', {

          templateUrl: "./components/trial-block/trial-block.template.html",

          bindings: {
            toggleBlock: '&',
            updateTrials: '=',
            removeTrial: '=',
            trials: '=',
            trial: '=',
            activeTrial: '<'
          },

          controller: trialBlockController
        });

function trialBlockController() {
  var vm = this;
  vm.statusicon = "";

  switch(vm.trial.status){
    case '0':
      vm.statusicon = "trial-pending";
      break;
    case '1':
      vm.statusicon = "trial-accept";
      break;
    case '2':
      vm.statusicon = "trial-reject";
      break;
  }

  vm.changeIcon = function(icon) {
    switch(icon){
      case '0':
        vm.statusicon = "trial-pending";
        break;
      case '1':
        vm.statusicon = "trial-accept";
        break;
      case '2':
        vm.statusicon = "trial-reject";
        break;
    }
  }
}
