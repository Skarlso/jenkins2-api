#!/usr/bin/env node

var program = require('commander')
var api = require('../lib/api')

program
  .option('-j, --job-name', 'Name of the job')
  .option('-b, --build-number', 'Number of the build')
  .parse(process.argv)

var args = program.args

if (args.length < 1) {
  console.log(`
    Usage: jenkins2-api-build [options]

    Commands:
      salve-name -j, --job-name -b, --build-number; Displays the name of the slave for a specific build
      abort -j, --job-name; Aborts a given job
      start -j, --job-name; Starts a given job

    Options:
      -h, --help  output usage information
  `)
  process.exit(1)
}

var job = program.jobName
var build = program.buildNumber

switch (args[0]) {
  case 'abort':
    
    break;
  case 'slave-name':
    api.getSlave(job, build)
    break;
  default:
    break;
}