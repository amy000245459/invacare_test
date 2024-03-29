const mongoose = require('mongoose')
//const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/todo-list'
//mongoose.connect(MONGODB_UR:, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  }) 

const db = mongoose.connection
db.on('error', () => {console.log('mongodb error!')})
db.once('open', () => { console.log('mongodb connected!')})
module.exports = db