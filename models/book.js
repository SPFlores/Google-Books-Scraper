module.exports = (Schema, model) => model('Book', new Schema({
  title: String,
  authors: String,
  description: String,
  image: String,
  link: String,
  favorite: Boolean
}))
