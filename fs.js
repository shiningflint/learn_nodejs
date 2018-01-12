const fs = require('fs')

module.exports = function(filename) {
  return fs.readFile(`${__dirname}/${filename}`, 'utf8', (err, data) => {
    err ? console.warn(err) : console.log(data)
  })
}
