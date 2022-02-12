const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/url-data'
// In heroku, using process.env.MONGODB_URI
// In local, using mongodb://localhost/url-data

mongoose.connect(MONGODB_URI)
const db = mongoose.connection

db.on('error', () => console.log('mongoDB error'))
db.once('open', () => console.log('mongoDB connection'))
