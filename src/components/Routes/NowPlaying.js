import React, { useEffect, useState } from 'react'
import { Container, Card, Col, Row, Button } from 'react-bootstrap'
import ModalTrailer from '../Result/ModalTrailer'
import '../Styles/NowPlaying.css'

const nowPlayingMovies =
  'https://api.themoviedb.org/3/movie/now_playing?api_key=79ce19b11f80253ec95757f195144888'

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/'

const NowPlaying = props => {
  const [movies, setMovies] = useState([])
  const [modal, setModalId] = useState(null)

  useEffect(() => {
    fetch(nowPlayingMovies)
      .then(response => response.json())
      .then(movie => {
        setMovies(movie.results)
      })
  }, [])

  const showMovies = movies.map(movie => (
    <Col xs={12} md={4} lg={4} key={movie.id} className="my-4">
      <Card className="my-3 h-100 shadow">
        <Card.Img variant="top" src={`${imageBaseUrl}${movie.backdrop_path}`} />
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
