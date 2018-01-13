const http = require('http')
const fs = require('fs')

const server = (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  const page = fs.readFile(`${__dirname}/html/server.html`, {encoding: 'utf8'}, (err, data) => {
    const result = data.replace('{Content}', 'This is the content mhahhfaha')
    return res.end(result)
  })
}

http.createServer(server).listen(8080)
