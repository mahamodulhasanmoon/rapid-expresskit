#!/usr/bin/env node

const {execSync} = require('child_process')
const runCommand = command => {
   try {
    execSync(`${command}`,{stdio:'inherit'})
   } catch (error) {
    console.log(`failed to Execute ${command}`)
    return false
   }
   return true
}

const repoName = process.argv[2]
const gitcheckoutCommand = `git clone --depth 1 https://github.com/mahamodulhasanmoon/rapid-expresskit ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`

console.log(`downloading boilarplate...`)
const checkout = runCommand(gitcheckoutCommand)
if(!checkout) process.exit(code -1)
    console.log(`installing Dependencies`);


const installDeps = runCommand(installDepsCommand)
if(!installDeps) process.exit(code -1)
    console.log(`congraculations you are ready to start`);

console.log(`cd ${repoName} && npm start`);
