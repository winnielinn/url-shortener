const express = require('express')
const router = express.Router()
const validUrl = require('valid-url')
const randomString = require('random-string')
const URL = require('../../models/url')

// heroku
const localhost = 'http://localhost:3000'
const herokulink = 'https://limitless-dusk-91688.herokuapp.com'
let mainUrl = process.env.PORT ? herokulink : localhost

router.post('/', (req, res) => {
  const input_url = req.body.url
  let randomCode = randomString({
    length: 5,
    numeric: true,
    letters: true,
    special: false,
  })

  // check if same randomCdoe in database
  URL.find({})
    .then(urlList => {
      while ((urlList).some((url) => url.shorten_url === randomCode)) {
        // when true, generate randomCode again
        randomCode = randomString({
          length: 5,
          numeric: true,
          letters: true,
          special: false,
        })
      }
    })
    .catch(error => console.log(error))

  // verify url
  // if yes, check existed data in database
  if (validUrl.isUri(input_url)) {
    return URL.findOne({ orignal_url: input_url })
      .then(url => url ? url : URL.create({ orignal_url: input_url, shorten_url: randomCode }))
      .then(url => res.render('index', { url: url.shorten_url, mainUrl }))
      .catch(error => console.log(error))
  }
  else {
    // if no, return error message
    const errorMessage = 'Please input valid url'
    res.render('error_page', { errorMessage })
  }
})


module.exports = router 
