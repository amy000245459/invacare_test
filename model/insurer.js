const mongoose = require('mongoose')
const Schema = mongoose.Schema
const insurerSchema = new Schema({
  code: {
    type: Number, 
    required: true 
  },
  name: {
    type: String, 
    required: true 
  },
  registration_date: {
    type: Date, 
    required: true 
  },
  introducer_code: {
    type: Number, 
    required: true 
  },
})
module.exports = mongoose.model('Insurer', insurerSchema)
