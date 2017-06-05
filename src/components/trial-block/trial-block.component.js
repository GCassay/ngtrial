angular .module('trialBlock')
        .component('trialBlock', {
          templateUrl: "./components/trial-block/trial-block.template.html",
          bindings: {
            toggleBlock: '&',
            updateTrials: '=',
            removeTrial: '=',
            trials: '=',
            trial: '=',
            activeTrial: '<'
          }
        });
