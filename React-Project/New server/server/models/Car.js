const mongoose = require('mongoose')

let car = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: {
    type: Number,
    min: 1900,
    max: 2020
  },
  engine: { type: String, required: true },
  price: {
    type: Number,
    min: 0,
    max: Number.MAX_VALUE,
    default: 0
  },
  image: { type: String, required: true },
  likes: { type: [], default: [] },
  reviews: { type: [], default: [] },
  creationOn: { type: Date, required: true },
  creationBy: { type: String, required: true },
  mileage: { type: Number }
})

mongoose.model('Car', car)

module.exports = mongoose.model('Car')