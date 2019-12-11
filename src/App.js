import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Routes/Home'
import Search from './components/Routes/Search'
import SharedResults from './components/Routes/SharedResults'
import { topRated, discover, nowPlaying } from './api'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/"  component={Home} />
        <Route path="/discover" component={() => <SharedResults url={discover} />} />
        <Route path="/now-playing" component={() => <SharedResults url={nowPlaying} />} />
        <Route path="/top-rated" component={() => <SharedResults url={topRated} />} />
        <Route path="/search/:movie" component={Search} />
      </div>
    </Router>
  )
}
export default App
