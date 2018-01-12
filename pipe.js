const fs = require('fs')
const zlib = require('zlib')

const readable = fs.createReadStream(`${__dirname}/pipelorem.txt`, { encoding: 'utf8', highWaterGate: 4 * 1024 })

const writeable = fs.createWriteStream(`${__dirname}/pipeloremcopy.txt`)

const compressed = fs.createWriteStream(`${__dirname}/pipelorem.txt.gz`)

const gzip = zlib.createGzip()

readable.pipe(writeable)
readable.pipe(gzip).pipe(compressed)
