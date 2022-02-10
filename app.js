const express = require('express')
const validUrl = require('valid-url')
const randomString = require('random-string')
const exphbs = require('express-handlebars').create({ defaultLayout: 'main', extname: '.hbs' })
const urls = require('./models/urls.js')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/url-data')
const db = mongoose.connection

db.on('error', () => console.log('mongoDB error'))
db.once('open', () => console.log('mongoDB connection'))

const app = express()
const port = 3000

app.engine('hbs', exphbs.engine)
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const inputUrl = req.body.url
  const randomCode = randomString({
    length: 5,
    numeric: true,
    letters: true,
    special: false,
  })

  // verify url
  // if yes, check existed data in database
  if (validUrl.isUri(inputUrl)) {
    return urls.findOne({ orignalUrl: inputUrl })
      .then(url => url ? url : urls.create({ orignalUrl: inputUrl, shortenUrl: randomCode }))
      .then(url => res.render('index', { url: url.shortenUrl }))
      .catch(error => console.log(error))
  } else {
    // if no, return error message
  }
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})