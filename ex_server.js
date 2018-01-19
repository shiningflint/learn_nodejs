const ejs = require('ejs')
const express = require('express')
const app = express()
const port = 3006

app.set('view engine', 'html')
app.engine('html', ejs.renderFile)

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/kentang', (req, res) => {
  res.render('potato', {url: req.url})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
