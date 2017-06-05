angular .module('trialMain')
        .component('trialMain', {
          templateUrl: "./components/trial-main/trial-main.template.html",
          controller: trialMainController
        });

function trialMainController(crud) {
  var vm = this;
  vm.trialcrud = crud;

  vm.addTrial = function() {
    crud.add({"id":1,"title":"Numbers 1-1000","desc":"List numbers from 1 to 100","url":"https://jsfiddle.net/GCassay/7bozbdoj/","status":"1"});
  }
}
