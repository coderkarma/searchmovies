import React, { useEffect, useState } from 'react';
import { Modal, Button, Toast } from 'react-bootstrap';
import YoutubeVideo from '../Result/YoutubeVideo';
import { key, baseUrl } from '../../api/index';

import '../Styles/ModalTrailer.css';

const ModelTrailer = props => {
	console.log('props ----', props);
	const [ videoKey, setVideoKey ] = useState(undefined);
	const [ toast, setToast ] = useState(null);

	useEffect(
		() => {
			const movieTrailerEndPoint = `${baseUrl}/movie/${props.movieId}?${key}&append_to_response=videos`;

			fetch(movieTrailerEndPoint)
				.then(response => {
					if (!response.ok)
						throw Error(
							`It went wrong ${response.status} message: ${response.statusText}`
						);
					return response.json();
				})
				.then(movieTrailer => {
					const moviesTrailers = movieTrailer.videos.results;
					moviesTrailers.length > 0
						? setVideoKey(moviesTrailers[0].key)
						: setToast('No Trailer Available! 😿');
				})
				.catch(error => setToast(error.message));
		},
		[ props.movieId ]
	);

	return (
		<React.Fragment>
			<Toast
				style={{
					position : 'fixed',
					top      : 80,
					right    : 0
				}}
				show={toast && !videoKey}
				onClose={() => setToast(null)}
				delay={3000}
				autohide
				animation={true}
			>
				<Toast.Header>
					<strong className='mr-auto'>There was an error....</strong>
				</Toast.Header>
				<Toast.Body>
					<h3>{toast}</h3>
				</Toast.Body>
			</Toast>

			<Modal
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered
				show={videoKey ? true : false}
			>
				<Modal.Body>
					<YoutubeVideo videoKey={videoKey} />
				</Modal.Body>
				<Modal.Footer>
					<Button
						className='close-button'
						onClick={() => props.closeCallback()}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</React.Fragment>
	);
};

export default ModelTrailer;
