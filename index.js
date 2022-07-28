const core = require('@actions/core');
const github = require('@actions/github');

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
} catch (error) {
  core.setFailed(error.message);
}
