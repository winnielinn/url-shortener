const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/url-data')
const db = mongoose.connection

db.on('error', () => console.log('mongoDB error'))
db.once('open', () => console.log('mongoDB connection'))