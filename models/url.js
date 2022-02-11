const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
  orignal_url: {
    type: String,
    required: true
  },
  shorten_url: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('URL', urlSchema)