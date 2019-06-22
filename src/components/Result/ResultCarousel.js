import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import '../Styles/ResultCarousel.css';

const getUpcomingMovie =
	'https://api.themoviedb.org/3/movie/upcoming?api_key=79ce19b11f80253ec95757f195144888&language=en-US&page=1';

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';
class ResultCarousel extends Component {
	state = {
		movies : []
	};
	getMovies() {
		fetch(getUpcomingMovie)
			.then(response => response.json())
			.then(upComingMovie => {
				console.log('upmcoming movies', upComingMovie);
				this.setState({ movies: upComingMovie.results });
			});
	}
	componentDidMount() {
		this.getMovies();
	}

	render() {
		if (this.state.movies.length > 0) {
			console.log(this.state.movies[0]);
			return (
				<Carousel className=' carousel_images'>
					{this.state.movies.map(movie => (
						<Carousel.Item key={`${movie.id} ${movie.title}`}>
							<img
								className='d-block'
								src={`${imageBaseUrl}${movie.backdrop_path}`}
								alt='First slide'
							/>
							<Carousel.Caption>
								<h3>{movie.title}</h3>
								<p>{movie.overview}</p>
							</Carousel.Caption>
						</Carousel.Item>
					))}
				</Carousel>
			);
		}
		return null;
	}
}

export default ResultCarousel;
