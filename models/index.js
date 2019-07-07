const { Schema, model } = require('mongoose')

const db = {
  Book: require('./book.js')(Schema, model)
}

module.exports = db
