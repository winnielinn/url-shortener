const express = require('express')
const exphbs = require('express-handlebars').create({ defaultLayout: 'main', extname: '.hbs' })

const app = express()
const port = 3000

app.engine('hbs', exphbs.engine)
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})