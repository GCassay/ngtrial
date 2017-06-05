angular .module('trialList')
        .component('trialList', {

          templateUrl: './components/trial-list/trial-list.template.html',

          bindings: {
            trialcrud: '='
          },

          controller: listControllerFunc

        });

function listControllerFunc(){

  var vm = this;
  crud = vm.trialcrud;

  crud.get()
      .then(function(trials) {
        vm.trials = trials;
        console.log(vm.trials)
      })
      .catch(function(response) {
        console.error('Gists error', response.status, response.data);
      });

  vm.toggleBlock = function(id) {
    this.activeTrial = (this.activeTrial !== id) ? id : null;
  }
}
