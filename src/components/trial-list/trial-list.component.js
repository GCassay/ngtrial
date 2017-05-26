angular .module('trialList')
        .component('trialList', {

          templateUrl: './components/trial-list/trial-list.template.html',

          controller: listControllerFunc

        });

function listControllerFunc(crud){
console.log(crud.trials);
  crud.trials.push('trial 4');
  this.algo = crud.trials;
}
