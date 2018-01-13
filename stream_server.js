const http = require('http')
const fs = require('fs')

const server = (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  fs.createReadStream(`${__dirname}/html/server.html`).pipe(res)
}

http.createServer(server).listen(8080)
