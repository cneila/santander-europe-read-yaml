const core = require('@actions/core');
const github = require('@actions/github');
var fs = require('fs');
const yaml1 = require('js-yaml');
const YAML = require('yamljs');

try {
  
  // `path` input defined in action metadata file
  const nameToGreet = core.getInput('path');
  console.log(`Path Param Received: ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(github.context.payload.after);
  console.log(`The event payload: ${payload}`);


  
  fs.readFile(`/home/runner/work/github-actions/github-actions/${nameToGreet}`, 'utf8',  (error, nameToGreet) => {
    if (error) throw error;
      console.log("El contenido es:" , nameToGreet);
      var indentedJson = JSON.stringify(nameToGreet, null, 4);
      console.log(`The event indentedJson: ${indentedJson}`);
  });


  outputfile = 'output.json',
  //yaml = require('js-yaml'),
  //fs = require('fs'),
  obj = yaml1.load(fs.readFileSync(`/home/runner/work/github-actions/github-actions/${nameToGreet}`, {encoding: 'utf-8'}));
  // this code if you want to save
  fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));

  
  fs.readFile(outputfile, 'utf8',  (error, content) => {
    if (error) throw error;
      console.log("El JSON es:" , content);
      //return  content;    
  });



} catch (error) {
  core.setFailed(error.message);
}
