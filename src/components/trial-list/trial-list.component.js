angular .module('trialList')
        .component('trialList', {

          templateUrl: './components/trial-list/trial-list.template.html',

          controller: listControllerFunc

        });

function listControllerFunc(crud){
  console.log(crud.trials[0]);
  crud.trials.push('trial 4');
  this.trials = crud.trials;
}
