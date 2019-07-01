import React, { useEffect, useState } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import ModalTrailer from '../Result/FeaturedTitle';
import '../Styles/Discover.css';

const moviesUrl =
	'https://api.themoviedb.org/3/discover/movie?api_key=79ce19b11f80253ec95757f195144888&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';
const Discover = props => {
	const [ discoverMovies, setDiscoverMovies ] = useState([]);
	const [ showModal, setShowModal ] = useState(null);

	useEffect(() => {
		fetch(moviesUrl)
			.then(response => {
				return response.json();
			})
			.then(movies => {
				const movieResult = movies.results;

				setDiscoverMovies(movieResult);
			});
	}, []);

	let images = discoverMovies.map((movie, idx) => {
		const handleTrailerOnClick = movieIdx => {
			setShowModal(movieIdx);
		};

		if (movie.backdrop_path != null) {
			return (
				<Col xs={12} md={4} lg={4} key={idx} className='my-4 '>
					<Card className='h-100 shadow'>
						<Card.Img
							variant='top'
							src={`${imageBaseUrl}${movie.backdrop_path}`}
						/>
						<Card.Body>
							<Card.Title>{movie.title}</Card.Title>
							<span>
								<Button
									onClick={e => handleTrailerOnClick(idx)}
								>
									Trailer!
								</Button>
							</span>
						</Card.Body>
						{showModal === idx ? (
							<ModalTrailer
								movieId={movie.id}
								closeCallback={() => setShowModal(false)}
							/>
						) : (
							''
						)}
					</Card>
				</Col>
			);
		}
		return null;
	});
	return (
		<Container>
			<Row>{images}</Row>
		</Container>
	);
};

export default Discover;
