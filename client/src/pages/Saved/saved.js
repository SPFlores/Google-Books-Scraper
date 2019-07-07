import React, { Component } from 'react'
import Book from '../../utils/Book.js'
class Saved extends Component {
  state = {
    books: []
  }

  handleGetFavotires = _ => {
    Book.getSaved()
      .then(({ data: books }) => this.setState({ books }))
      .catch(e => console.log(e))
  }

  componentDidMount = _ => {
    this.handleGetFavotires()
  }

  render() {
    return (
      <>
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

export default Saved
