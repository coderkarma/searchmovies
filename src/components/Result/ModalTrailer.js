import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import YoutubeVideo from '../Result/YoutubeVideo'
import '../Styles/ModalTrailer.css'

const ModelTrailer = props => {
  console.log('props ----', props)
  const [videoKey, setVideoKey] = useState(undefined)

  useEffect(() => {
    const movieTrailerEndPoint = `http://api.themoviedb.org/3/movie/${
      props.movieId
    }?api_key=79ce19b11f80253ec95757f195144888&append_to_response=videos`

    fetch(movieTrailerEndPoint)
      .then(response => response.json())
      .then(movieTrailer => {
        console.log('Here is the modal movie trailer', movieTrailer)

        const moviesTrailer = movieTrailer.videos.results[0].key

        setVideoKey(moviesTrailer)
      })
      .catch(error => console.log("here's the error", error))
  })

  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={true}
        onHide={props.closeCallback}
      >
        <Modal.Body>
          <YoutubeVideo videoKey={videoKey} />
        </Modal.Body>
        <Modal.Footer>
          <Button className="close-button" onClick={props.closeCallback}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModelTrailer
