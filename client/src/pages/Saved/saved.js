import React, { Component } from 'react'
import Stack from '../../utils/Book.js'

class Saved extends Component {
  componentDidMount = _ => {
    Stack.getSaved()
      .then(({ data: stacks }) => this.setState({ stacks }))
      .catch(e => console.log(e))
  }

  render() {
    return (
      <>
        <h1>hello there</h1>
      </>
    )
  }
}

export default Saved
