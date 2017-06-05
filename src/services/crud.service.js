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

        function updateTrials(updatedContent) {
          var jsonContent = angular.toJson(updatedContent); // Strip intern angular values $$ssh
          gist.update({ files: { "trials.json":{ "content": jsonContent } } }).catch( ()=>{
            setTimeout(()=>{
              updateGist(updatedContent);
              return true;
            },3000);
          });
        }

        function addTrial(updatedContent) {
          readTrials().then(function(trials){
            trials = trials;
            trials.push({"id":"2805ce24e0555f9952a4a377c8340888","title":"Numbers 1-1000","desc":"List numbers from 1 to 100","url":"https://jsfiddle.net/GCassay/7bozbdoj/","status":"1"});
            console.log(trials)
            updateTrials({ "trials" : trials })
          });
        }

        return {
          get: readTrials,
          update: updateTrials,
          add: addTrial
        }
      });
