const ejs = require('ejs')
const bodyParser = require('body-parser') //to parse POST
const express = require('express')
const app = express()
const port = 3006

app.set('view engine', 'html')
app.engine('html', ejs.renderFile)
const urlParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()

app.get('/', (req, res) => {
  res.render('index_form')
})

// uses url parser to parse the post header
app.post('/person', urlParser, (req, res) => {
  res.send(req.body)
})

// receives a json request and parse it
app.post('/personjson', jsonParser, (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

app.get('/kentang', (req, res) => {
  res.render('potato', {url: req.url})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
