import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import YoutubeVideo from '../Result/YoutubeVideo';
import { key, baseUrl } from '../../api/index';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import '../Styles/ModalTrailer.css';

const ModelTrailer = props => {
	console.log('props ----', props);
	const [ videoKey, setVideoKey ] = useState(undefined);

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
					const moviesTrailer = movieTrailer.videos.results[0].key;
					setVideoKey(moviesTrailer);
				})
				.catch(error => console.log('VIDEO ERROR HERE', error));
		},
		[ props.movieId ]
	);

	return (
		<div>
			<Modal
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered
				show={true}
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
		</div>
	);
};

export default ModelTrailer;
