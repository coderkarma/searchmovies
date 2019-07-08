import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import YoutubeVideo from '../Result/YoutubeVideo'
import '../Styles/ModalTrailer.css'
import { key, baseUrl } from '../../api'

const ModalTrailer = props => {
  const [videoKey, setVideoKey] = useState(undefined)

  useEffect(() => {
    const movieTrailerEndPoint = `${baseUrl}/movie/${
      props.movieId
    }?${key}&append_to_response=videos`

    fetch(movieTrailerEndPoint)
      .then(response => {
        if (!response.ok)
          throw Error(`It went wrong ${response.status} message: ${response.statusText}`)
        response.json()
      })
      .then(movieTrailer => {
        console.log('Here is the modal movie trailer', movieTrailer)

        const moviesTrailer = movieTrailer.videos.results[0].key

        setVideoKey(moviesTrailer)
      })
      .catch(console.log)
  }, [props.movieId])

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

export default ModalTrailer
