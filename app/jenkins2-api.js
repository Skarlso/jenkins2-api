#!/usr/bin/env node

var commands = require("commander")

commands
  .version("0.0.1")
  .command("build", "Handle all build related commands like, start, stop, get slave.")
  .parse(process.argv)