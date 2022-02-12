const express = require('express')
const router = express.Router()
const validUrl = require('valid-url')
const randomString = require('random-string')
const URL = require('../../models/url')

router.post('/', (req, res) => {
  const input_url = req.body.url
  let randomCode = randomString({
    length: 5,
    numeric: true,
    letters: true,
    special: false,
  })

  // create empty collection
  const urlCollection = []

  // find all data and push in urlCollection
  URL.find({})
    .then(url => {
      for (let i = 0; i < url.length; i++) {
        urlCollection.push(url[i].shorten_url)
      }
      // check same randomCdoe in database
      // when true, generate randomCode again
      while (urlCollection.includes(randomCode)) {
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
      .then(url => res.render('index', { url: url.shorten_url }))
      .catch(error => console.log(error))
  }
  else {
    // if no, return error message
    const errorMessage = 'Please input valid url'
    res.render('error_page', { errorMessage })
  }
})


module.exports = router 
