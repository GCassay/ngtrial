// trial-top.component.js

angular .module('trialTop')
        .component('trialTop',{

          templateUrl: './components/trial-top/trial-top.template.html',

          bindings: {
            addTrial: '='
          },

          controller: trialTopController

        });

function trialTopController() {

  var vm = this;

  vm.resetForm = function() {
    vm.title = "";
    vm.desc = "";
    vm.url = "";
  }
}
