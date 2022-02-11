const express = require('express')
const exphbs = require('express-handlebars').create({ defaultLayout: 'main', extname: '.hbs' })
const routes = require('./routes')

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
app.use(routes)


app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})