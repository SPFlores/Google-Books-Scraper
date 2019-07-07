const { Book } = require('../models')
const axios = require('axios')

module.exports = app => {
  // get all books
  app.get('/books', (req, res) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.body}&key=${process.env.API_KEY}`)
      .then(({ data }) => {
        Book.find({})
          .then(books => res.json(books))
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
  })

  // get saved
  app.get('/saved', (req, res) => {
    Book.find({ favorite: true })
      .then(books => res.json(books))
      .catch(e => console.log(e))
  })

  // update when saved
  app.put('/books/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, { favorite: true })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
