const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  img_url: {
    type: String,
    required: true
  },

  bookID: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },

  read: {
    type: Boolean,
    default: false
  }
})

module.exports = Book = mongoose.model("book", BookSchema)