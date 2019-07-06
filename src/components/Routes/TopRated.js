import React, { useState, useEffect } from 'react'
import { Container, Card, Col, Row, Button } from 'react-bootstrap'
import '../Styles/TopRated.css'

const topRatedMovies =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=79ce19b11f80253ec95757f195144888&language=en-US&page=1'

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/'

const TopRated = props => {
  const [topRated, setTopRatedState] = useState([])

  useEffect(() => {
    console.log('it works')
    fetch(topRatedMovies)
      .then(response => response.json())
      .then(topRatedMovies => {
        const topMovies = topRatedMovies.results
        setTopRatedState(topMovies)
      })
  }, [])

  let topMovies = topRated.map((movie, idx) => {
    return (
      <Col xs={12} md={4} lg={4} key={idx} className="my-4">
        <Card className="my-3 h-100 card shadow">
          <Card.Img variant="top" src={`${imageBaseUrl}${movie.backdrop_path}`} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <span>
              <Button>Trailer</Button>
            </span>
          </Card.Body>
        </Card>
      </Col>
    )
  })

  return (
    <Container>
      <Row>{topMovies}</Row>
    </Container>
  )
}

export default TopRated
