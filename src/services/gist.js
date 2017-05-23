// GISTS.JS

var gh = new GitHub({ token: gistToken });
var gist = gh.getGist(gistId, gh);
var trials;

// Get JSON content from Gist
// @return {Object} Trial data
function readGist(){
  return gist.read().then((data) => {
    trials = data.data.files["trials.json"].content;
    trials = JSON.parse(trials).trials;
    return trials;
  })
  .catch((e)=>console.log(e));
}

// Save Gist content changes
// @param {Object} Trials data
function updateGist(updatedContent){
  var jsonContent = JSON.stringify(updatedContent);
  gist.update({ files: { "trials.json":{ "content": jsonContent } } }).catch( ()=>{
    setTimeout(()=>{
      updateGist(updatedContent);
      return true;
    },3000);
  });
}
