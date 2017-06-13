// trial-main.component.js

angular .module('trialMain', ['services','service.encode','trialTop','trialList','trialBlock'])
        .component('trialMain', {
          templateUrl: "./components/trial-main/trial-main.template.html",
          controller: trialMainController
        });

function trialMainController(crud, encode) {

  var vm = this;
  vm.encode = encode;

  // Read trial data
  vm.readTrials = function() {
    crud.get()
        .then(function(trials) {
          vm.trials = trials;
        })
        .catch(function(response) {
          console.error('Gists error', response.status, response.data);
        });
  }

  // Add new trial
  vm.addTrial = function(newTitle,newDesc,newUrl) {

    var newTrial = {
      id: vm.encode.MD5(newTitle.concat(vm.trials.length)),
      title: newTitle,
      desc: newDesc,
      url: newUrl,
      status: "0"
    }

    vm.trials.push(newTrial);
    crud.update({ trials: vm.trials });

    vm.title = "";
  }

  // Update trial data
  vm.updateTrials = function(trial) {
    crud.update({ trials: vm.trials });
  }

  // Delete specific trial
  vm.removeTrial = function(trial) {
    var trialIndex = vm.trials.indexOf(trial);
    vm.trials.splice(trialIndex,1);
    crud.update({ trials: vm.trials });
  }
}
