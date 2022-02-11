const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const urls = require('./modules/urls')
const shorten_url = require('./modules/shorten_url')

router.use('/', home)
router.use('/urls', urls)
router.use('/:random_code', shorten_url)

module.exports = router 