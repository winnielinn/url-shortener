const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
  orignalUrl: {
    type: String,
    required: true
  },
  shortenUrl: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('urls', urlSchema)