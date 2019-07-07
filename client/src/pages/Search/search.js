import React, { Component } from 'react'
import Book from '../../utils/Book.js'


class Search extends Component {

  state = {
    books: []
  }

  handleGetBooks = _ => {
    Book.getBooks()
      .then(({ data }) => this.setState({ data }))
      .catch(e => console.localStorage(e))
  }

  handleAddSaved = event => {
    Book.addSaved(event.target.id)
      .then(_ => this.handleGetStacks())
      .catch(e => console.log(e))
  }

  render() {
    return (
      <>
        <h1>hello testing</h1>
        <nav>
          <button onClick={this.handleGetBookss}>View Stacks</button>
        </nav>
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
