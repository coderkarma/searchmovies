import React, { useEffect, useState } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import ModalTrailer from '../Result/ModalTrailer';
import '../Styles/NowPlaying.css';

const nowPlayingMovies =
	'https://api.themoviedb.org/3/movie/now_playing?api_key=79ce19b11f80253ec95757f195144888';

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';

const NowPlaying = props => {
	const [ playingMovies, setPlayingMovies ] = useState([]);
	const [ currentModal, setCurrentModal ] = useState(null);

	useEffect(() => {
		fetch(nowPlayingMovies)
			.then(response => {
				return response.json();
			})
			.then(playingMovies => {
				const playingAllMovies = playingMovies.results;
				console.log('here are the playing movies ', playingAllMovies);

				setPlayingMovies(playingAllMovies);
			});
	}, []);

	let allNowPlayingMovies = playingMovies.map((movie, idx) => {
		const handleTrailerOnClick = movieIndex => {
			setPlayingMovies(movieIndex);
		};
		return (
			<Col xs={12} md={4} lg={4} key={idx} className='my-4'>
				<Card className='my-3 h-100 shadow'>
					<Card.Img
						variant='top'
						src={`${imageBaseUrl}${movie.backdrop_path}`}
					/>
					<Card.Body>
						<Card.Title>{movie.title}</Card.Title>
						<span className='text-center'>
							<Button
								onClick={e => handleTrailerOnClick(idx)}
								className='trailer-button'
							>
								Trailer
							</Button>
						</span>
						{currentModal === idx ? (
							<ModalTrailer
								movieId={movie.id}
								closeCallback={() => setCurrentModal(false)}
							/>
						) : (
							''
						)}
					</Card.Body>
				</Card>
			</Col>
		);
	});
	return (
		<Container>
			<Row>{allNowPlayingMovies}</Row>
		</Container>
	);
};

export default NowPlaying;
