angular .module('trialBlock')
        .component('trialBlock', {
          templateUrl: "./components/trial-block/trial-block.template.html",
          bindings: {
            trial: '=',
            toggleBlock: '&',
            trialUpdate: '=',
            activeTrial: '<'
          }
        });
