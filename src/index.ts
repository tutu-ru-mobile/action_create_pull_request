import * as core from '@actions/core';
import * as github from '@actions/github';

if (!github) {
    throw new Error('Module not found: github');
}

if (!core) {
    throw new Error('Module not found: core');
}

async function main() {
    console.log("hello TypeScript")
    const {repo: {owner, repo}} = github.context;
    // const prBranch = github.context.payload.pull_request.head.ref;

    // console.log({eventName, sha, headSha, branch, owner, repo});
    const token = core.getInput('access_token', {required: true});
    const branch_from = core.getInput('branch_from', {required: true});
    const branch_to = core.getInput('branch_to', {required: true});
    const title = core.getInput('title', {required: true});
    console.log(`Found token: ${token ? 'yes' : 'no'}`);
    const octokit = new github.GitHub(token);
    const newPR = await octokit.pulls.create({
        title: title,
        head: branch_from,
        base: branch_to,
        owner: owner,
        repo: repo
    })
    console.log("newPR.data", newPR.data)
    console.log('Done.');
}

main()
    .then(() => core.info('Cancel Complete.'))
    .catch(e => core.setFailed(e.message));
