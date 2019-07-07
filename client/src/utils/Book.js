import axios from 'axios'

const Book = {
  getBooks: _ => axios.get('/books'),
  getSaved: _ => axios.get('/saved'),
  addSaved: id => axios.put(`/saved/${id}`) 
}

export default Book
