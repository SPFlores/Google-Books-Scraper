import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'

const App = _ => {
  return (
    <>
      <Router>
        <div>
          <nav>
            <Link to='/' > Search </Link>
            <Link to='/saved' >Saved</Link>
          </nav>
          <Route exact path='/' component={_ => <Search />} />
          <Route path='/saved' component={_ => <Saved />} />
        </div>
      </Router>
      
    </>
  )
}

export default App
