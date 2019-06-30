import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import YoutubeVideo from '../Result/YoutubeVideo';

const ModelTrailer = props => {
	const [ videoKey, setVideoKey ] = useState(undefined);

	useEffect(
		() => {
            console.log("Effect has fired");
			const movieTrailerEndPoint = `http://api.themoviedb.org/3/movie/${props.movieId}?api_key=79ce19b11f80253ec95757f195144888&append_to_response=videos`;

			fetch(movieTrailerEndPoint)
				.then(response => response.json())
				.then(movieTrailer => {
					console.log('Here is the movie trailer', movieTrailer);

					const moviesTrailer = movieTrailer.videos.results[0].key;

					setVideoKey(moviesTrailer);
				});
		}
	);

	return (
		<div>
			<Modal
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered
				show={true}
			>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>
						Modal heading
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Centered Modal</h4>
					<YoutubeVideo videoKey={videoKey} />
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => props.closeCallback()}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default ModelTrailer;
