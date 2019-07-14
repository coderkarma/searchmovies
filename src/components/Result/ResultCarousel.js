import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useTransition, animated, config } from 'react-spring';
import '../Styles/ResultCarousel.css';

const getUpcomingMovie =
	'https://api.themoviedb.org/3/movie/upcoming?api_key=79ce19b11f80253ec95757f195144888&language=en-US&region=US&with_release_type=2|3';

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';

const ResultCarousel = props => {
	// const [ movies, setMoviesState ] = useState([]);
	// const [ index, set ] = useState(0);

	// const transitions = useTransition(movies[index], item => item.id, {
	// 	from   : { opacity: 0 },
	// 	enter  : { opacity: 1 },
	// 	leave  : { opacity: 0 },
	// 	config : config.molasses
	// });

	useEffect(() => {
		// fetch(getUpcomingMovie)
		// 	.then(response => {
		// 		if (!response.ok)
		// 			throw Error(
		// 				`It went wrong ${response.status} message: ${response.statusText}`
		// 			);
		// 		return response.json();
		// 	})
		// 	.then(upComingMovie => {
		// 		const moviesData = upComingMovie.results;
		// 		setMoviesState(moviesData.filter(m => m.backdrop_path));
		// 	})
		// 	.catch(err => console.log(err));
		const fetchData = async () => {
			try {
				const response = await fetch(getUpcomingMovie);

				if (!response.ok) {
					throw Error(
						`It went wrong ${response.status} message: ${response.statusText}`
					);
				}
				const upComingMovie = await response.json();
				const moviesData = upComingMovie.results;
				setMoviesState(moviesData.filter(m => m.backdrop_path));
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);

	const result = movies.map((movie, index) => {
		return (
			<Carousel.Item key={`${movie.id} ${movie.title}`}>
				<img
					className='d-block'
					src={`${imageBaseUrl}${movie.backdrop_path}`}
					alt={movie.name}
				/>
				<Carousel.Caption>
					<h4>Upcoming Movies</h4>
					<span className='title'>
						<h1>{movie.title}</h1>
					</span>
					<p>{movie.overview}</p>
					<h1>Release Date- {movie.release_date}</h1>
				</Carousel.Caption>
			</Carousel.Item>
		);
	});

	return <Carousel className='carousel_images'>{result}</Carousel>;
};

export default ResultCarousel;
