import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Main from './pages/Main'
import Saved from './pages/Saved'

const App = _ => {
  return (
    <>
      <Router>
        <div>
          <nav>
            <Link to='/' > Main </Link>
            <Link to='/saved' >Saved</Link>
          </nav>
          <Route exact path='/' component={_ => <Main />} />
          <Route path='/saved' component={_ => <Saved />} />
        </div>
      </Router>
    </>
  )
}

export default App
