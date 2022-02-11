const express = require('express')
const router = express.Router()
const URL = require('../../models/url')

router.get('/:random_code', (req, res) => {
  const randomCode = req.params.random_code
  return URL.findOne({ shorten_url: randomCode })
    .then(url => res.status(301).redirect(url.orignal_url))
    .catch(error => {
      console.log(error)
      res.render('error_page', { status: 500, errorMessage: error.message })
    })
})

module.exports = router 