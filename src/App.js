import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar'
import Result from './components/Result/Result'
import Home from './components/Routes/Home'
import Search from './components/Routes/Search'
import SharedResults from './components/Routes/SharedResults'
import { topRated, discover, nowPlaying } from './api'

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  state = {
    results: []
  }

  handleSubmit = value => {
    //encodeurl makes a valid string for url
    let urlEncodedValue = encodeURIComponent(value)

    let url = `https://api.themoviedb.org/3/search/movie?api_key=79ce19b11f80253ec95757f195144888&query=${urlEncodedValue} `

    fetch(url)
      .then(response => response.json())
      .then(searchData => {
        this.setState({
          results: searchData.results
        })
      })
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar handleSubmit={this.handleSubmit} />
          <Route path="/" exact component={Home} />
          <Route path="/discover" component={() => <SharedResults url={discover} />} />
          <Route path="/now-playing" component={() => <SharedResults url={nowPlaying} />} />
          <Route path="/top-rated" component={() => <SharedResults url={topRated} />} />
          <Route path="/search" component={Search} />

          <Result results={this.state.results} />
        </div>
      </Router>
    )
  }
}
export default App
