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

  // Read Trial Data
  crud.get()
      .then(function(trials) {
        vm.trials = trials;
      })
      .catch(function(response) {
        console.error('Gists error', response.status, response.data);
      });

  // Function to control show/hide trial blocks
  vm.toggleBlock = function(id) {
    this.activeTrial = (this.activeTrial !== id) ? id : null;
  }

  // Function to save trial data changes
  vm.trialUpdate = function(trial) {
    var trialIndex = vm.trials.indexOf(trial);
    crud.update({ trials: vm.trials });
  }

  // Function to delete specific trial
  vm.trialRemove = function(trial) {
    
  }
}
