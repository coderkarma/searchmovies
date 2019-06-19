import React, { Component } from 'react';

class ResultCarousel extends Component {
	render() {
		const getMovies = movie => {
			let getUpcomingMovie =
				'https://api.themoviedb.org/3/movie/upcoming?api_key=79ce19b11f80253ec95757f195144888&language=en-US&page=1';

			fetch(getUpcomingMovie)
				.then(response => response.json())
				.then(upComingMovies =>
					console.log('check here karma', upComingMovies)
				);
		};
		return <div>{getMovies}</div>;
	}
}

export default ResultCarousel;

// todo: Make a carousel for upcoming mvoies and invoke that in the app component before result componnent
