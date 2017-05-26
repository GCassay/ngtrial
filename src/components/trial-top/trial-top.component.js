angular .module('trialTop')
        .component('trialTop',{

          templateUrl: './components/trial-top/trial-top.template.html',

          controller: trialTopController

        });

function trialTopController(crud) {

  this.addTrial = function() {
    console.log('NEW TRIAL');
  }

  

}
