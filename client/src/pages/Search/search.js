import React, { Component } from 'react'
import Book from '../../utils/Book.js'

class Search extends Component {

  state = {
    books: [],
    searchInput: ''
  }

  handleGetBooks = _ => {
    Book.getBooks()
      .then(({ data: books }) => this.setState({ books }))
      .catch(e => console.log(e))
  }

  handleAddSaved = event => {
    Book.addSaved(event.target.id)
      .then(_ => this.handleGetBooks())
      .catch(e => console.log(e))
  }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    return (
      <>
        <input type="text" name="search" id="searchInput" onChange={this.handleInputChange} />
        <button id="search" onClick={this.handleGetBooks}>Search</button>
        {/* the below would be the general element I would need to render from each book in the DB, I'm just having trouble connecting everything */}
        {
          this.state.books.map(book => {
            return (
              <div key={book._id}>
                <p>{book.title}</p>
                <p>{book.authors}</p>
                <p>{book.image}</p>
                <p>{book.description}</p>
                <p>{book.link}</p>
                {
                  book.favorite ? null : <button onclick={this.handleAddSaved} id={book._id}>Add favorite</button>
                }
              </div>
            )
          })
        }
      </>
    )
  }
}

export default Search
