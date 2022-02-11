const express = require('express')
const validUrl = require('valid-url')
const randomString = require('random-string')
const exphbs = require('express-handlebars').create({ defaultLayout: 'main', extname: '.hbs' })
const URL = require('./models/URL.js')

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
  const input_url = req.body.url
  const randomCode = randomString({
    length: 5,
    numeric: true,
    letters: true,
    special: false,
  })

  // verify url
  // if yes, check existed data in database
  if (validUrl.isUri(input_url)) {
    return URL.findOne({ orignal_url: input_url })
      .then(url => url ? url : URL.create({ orignal_url: input_url, shorten_url: randomCode }))
      .then(url => res.render('index', { url: url.shorten_url }))
      .catch(error => console.log(error))
  } else {
    // if no, return error message
    const errorMessage = 'Please input valid url'
    res.render('error_page', { errorMessage })
  }
})

app.get('/:random_code', (req, res) => {
  const randomCode = req.params.random_code
  return URL.findOne({ shorten_url: randomCode })
    .then(url => res.status(301).redirect(url.orignal_url))
    .catch(error => {
      console.log(error)
      res.render('error_page', { status: 500, errorMessage: error.message })
    })
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})