import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import YoutubeVideo from '../Result/YoutubeVideo';

const movieTrailerEndPoint = `http://api.themoviedb.org/3/movie/157336?api_key=79ce19b11f80253ec95757f195144888&append_to_response=videos`;

const ModelTrailer = props => {
	const [ isShowing, setIsShowing ] = useState(false);

	useEffect(() => {
		fetch(movieTrailerEndPoint)
			.then(response => response.json())
			.then(movieTrailer => {
				console.log('Here is the movie trailer', movieTrailer);

				const moviesTrailer = movieTrailer.videos.result;
				console.log(moviesTrailer);

				setIsShowing(true);
			});
	});

	const closeModal = () => {
		setIsShowing(false);
	};

	return (
		<div>
			<Modal
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered
				show={isShowing}
			>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>
						Modal heading
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Centered Modal</h4>
					<YoutubeVideo id='5794fffbc3a36829ab00056f' />
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={closeModal}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default ModelTrailer;
