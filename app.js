const express = require('express')
const exphbs = require('express-handlebars').create({ defaultLayout: 'main', extname: '.hbs' })
const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = process.env.PORT  || 3000
// In heroku, port is put in process.env.PORT
// In local, port is 3000

app.use(express.static('public'))

app.engine('hbs', exphbs.engine)
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(routes)


app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})