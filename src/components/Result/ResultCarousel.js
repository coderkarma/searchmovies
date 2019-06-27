import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import '../Styles/ResultCarousel.css';

const getUpcomingMovie =
	'https://api.themoviedb.org/3/movie/upcoming?api_key=79ce19b11f80253ec95757f195144888&language=en-US&region=US&with_release_type=2|3';

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';
class ResultCarousel extends Component {
	state = {
		movies         : [],
		featuredMovies : []
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
				<Carousel className='carousel_images'>
					{this.state.movies.map(movie => {
						if (movie.backdrop_path != null) {
							return (
								<Carousel.Item
									key={`${movie.id} ${movie.title}`}
								>
									<img
										className='d-block'
										src={`${imageBaseUrl}${movie.backdrop_path}`}
										alt='First slide'
									/>
									<Carousel.Caption>
										<h4>Upcoming Movies</h4>
										<span className="title">
											<h1>
												{movie.title}
											</h1>
										</span>
										<p>{movie.overview}</p>
										<h1>
											Release Date- {movie.release_date}
										</h1>
									</Carousel.Caption>
								</Carousel.Item>
							);
						}
						return null;
					})}
				</Carousel>
			);
		}
		return null;
	}
}

export default ResultCarousel;
