angular .module('trialList')
        .component('trialList', {

          templateUrl: './components/trial-list/trial-list.template.html',

          controller: listControllerFunc

        });

function listControllerFunc(crud){

  var vm = this;

  crud.get()
      .then(function(trials) {
        vm.trials = trials;
      })
      .catch(function(response) {
        console.error('Gists error', response.status, response.data);
      });

      vm.toggleBlock = function(id) {
        this.activeTrial = (this.activeTrial !== id) ? id : null;
      }

}
