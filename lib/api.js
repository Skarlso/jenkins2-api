var chalk = require('chalk')

var api = function() {}

api.prototype.getSlave = function(job, id) {
  console.log(`Searching for slave on job ${chalk.green(job)} for build number ${chalk.magenta(id)}`)
}

module.exports = new api()