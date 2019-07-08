import React, { useEffect, useState } from 'react'
import { Container, Card, Col, Row, Button } from 'react-bootstrap'
import ModalTrailer from '../Result/ModalTrailer'

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/'

const NowPlaying = ({ url }) => {
  const [movies, setMovies] = useState([])
  const [modal, setModalId] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok)
          throw Error(`It went wrong ${response.status} message: ${response.statusText}`)
        return response.json()
      })
      .then(data => {
        setMovies(data.results.filter(m => m.backdrop_path))
      })
      .catch(console.log)
  }, [url])

  const showMovies = movies.map(movie => (
    <Col xs={12} md={4} lg={4} key={movie.id} className="my-4">
      <Card className="my-3 h-100 shadow">
        <Card.Img
          variant="top"
          src={`${imageBaseUrl}${movie.backdrop_path || movie.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <span className="text-center">
            <Button onClick={e => setModalId(movie.id)} className="trailer-button">
              Trailer
            </Button>
          </span>
        </Card.Body>
      </Card>
    </Col>
  ))

  return (
    <Container>
      <Row>{showMovies}</Row>
      {modal && <ModalTrailer movieId={modal} closeCallback={() => setModalId(null)} />}
    </Container>
  )
}

export default NowPlaying
