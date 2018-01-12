const stdin = process.openStdin()
const greet = require('./fs')

stdin.on("data", (d) => {
  console.log(`You Entered: ${d}`)
  greet(d.toString().replace(/[\n\r\t]/g, ""))
})
