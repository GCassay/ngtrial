angular .module('trialMain')
        .component('trialMain', {
          templateUrl: "./components/trial-main/trial-main.template.html",
          controller: trialMainController
        });

function trialMainController(crud) {
  var vm = this;
  vm.trialcrud = crud;
}
