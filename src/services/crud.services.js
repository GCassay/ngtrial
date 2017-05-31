angular .module('services', [])
        .factory('crud', function crudfunc($q){

        var gh = new GitHub({ token: "9ae0fc9f50ea86767ee17f00bf538503e929538f" });
        var gist = gh.getGist("8953d5f8829b3bcb1a853103e6459da0", gh);
        var trials;

        function readTrials() {
          var deferred = $q.defer();

          gist.read().then((data) => {
            trials = data.data.files["trials.json"].content;
            trials = JSON.parse(trials).trials;
            deferred.resolve(trials);
          })
          .catch((e)=>console.log(e));

          return deferred.promise;
        }

        function updateTrials() {
          var jsonContent = JSON.stringify(updatedContent);
          gist.update({ files: { "trials.json":{ "content": jsonContent } } }).catch( ()=>{
            setTimeout(()=>{
              updateGist(updatedContent);
              return true;
            },3000);
          });
        }

        function addTrial(trial) {

        }

        return {
          get: readTrials,
          update: updateTrials,
          add: addTrial
        }
      });
