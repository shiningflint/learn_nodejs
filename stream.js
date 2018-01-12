const fs = require('fs')

const readable = fs.createReadStream(`${__dirname}/lorem.txt`, { encoding: 'utf8', highWaterMark: 4 * 1024 })
const writeable = fs.createWriteStream(`${__dirname}/loremcopy.txt`)

readable.on('data', (chunk) => {
  const chunkLine = chunk.concat("\n================================\n\n")
  writeable.write(chunkLine)
})

readable.on('close', () => {
  console.log("\n\n\nTHE STREAM IS OVER!!! THAT'S ALL FOLKS!\n\n\n")
})
