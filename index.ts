import { Octokit } from "@octokit/core"
import { restEndpointMethods, } from "@octokit/plugin-rest-endpoint-methods"

import { PullRequest } from './types';

const MyOctokit = Octokit.plugin(restEndpointMethods)

const octokit = new MyOctokit({
  auth: process.env.GITHUB_TOKEN
})

octokit.pulls.get({
  owner: 'nikku',
  repo: 'merge-me',
  pull_number: 21
}).then(d => logPR(d.data));

function logPR(pull: PullRequest): void {
  console.log(pull);
}