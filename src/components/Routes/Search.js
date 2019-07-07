import React from 'react'

// visit http://localhost:3000/search/avengers in browser address bar with app running

const Search = props => {
  console.log('what is here', props.match.params)
  const movie = props.match.params.movie // 'avengers'

  return (
    <div>
      <h1>Search component!</h1>
      {movie}
    </div>
  )
}

export default Search
