const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
  orignal_url: {
    type: String,
    required: true,
    unique: true
  },
  shorten_url: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('URL', urlSchema)