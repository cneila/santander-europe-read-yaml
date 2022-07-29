const core = require('@actions/core');
const github = require('@actions/github');
var fs = require('fs');
const yaml1 = require('js-yaml');
const YAML = require('yamljs');

try {
  // `path` input defined in action metadata file
  const nameToGreet = core.getInput('path');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(github.context.payload.after);
  console.log(`The event payload: ${payload}`);


  
  fs.readFile(`/home/runner/work/github-actions/github-actions/config.yaml`, 'utf8',  (error, nameToGreet) => {
    if (error) throw error;
      console.log("El contenido es:" , nameToGreet);
  });


  module.exports = {
    save : function(nameToGreet) {
      fs.writeFile('edit1.yml',YAML.stringify(nameToGreet,4),function(err,item){
        if(err) {
        }
      });
    },
    load : function() {
      var data = yaml1.safeLoad(fs.readFileSync('edit0.yml','utf8'));
      var indentedJson = JSON.stringify(data, null, 4);
      console.log(`The event indentedJson: ${indentedJson}`);
      return indentedJson;
    }
  }; 


} catch (error) {
  core.setFailed(error.message);
}
