import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class ResultCarousel extends Component {
	state = {
		movies : []
	};
	getMovies() {
		let getUpcomingMovie =
			'https://api.themoviedb.org/3/movie/upcoming?api_key=79ce19b11f80253ec95757f195144888&language=en-US&page=1';

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
		let movies = this.state.movies.map(movie => {
			let image = movie.backdrop_path;
			console.log('movieimage', movie);
			return image;
		});
		// console.log('333', movies);
		return (
			// <ul>
			// 	{this.state.movies.map(({ title, vote_count}) => {
			// 		return (
			// 			<li>
			// 				{title} - {vote_count}
			// 			</li>
			// 		);
			// 	})}
			// </ul>
			<Carousel>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={movies}
						alt='First slide'
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>
							testing
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default ResultCarousel;

// todo: Make a carousel for upcoming mvoies and invoke that in the app component before result componnent
