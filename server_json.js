const http = require('http')
const fs = require('fs')
const person = {
  name: 'Kiras',
  ability: 'Piercing Tornado'
}

const indexPage = (res) => {
  return fs.createReadStream(`${__dirname}/html/characters.html`).pipe(res)
}

const setPerson = (person, name, ability) => {
  person.name = name
  person.ability = ability
  return
}

const server = (req, res) => {
  console.log(req.url)
  if (req.url === '/taliyfa') {
    setPerson(person, 'Taliyfa', 'Water Healing')
  } else if (req.url === '/kiras') {
    setPerson(person, 'Kiras', 'Piercing Tornado')
  } else {
    return indexPage(res)
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(person))
}

http.createServer(server).listen(8080)
