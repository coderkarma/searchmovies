import React, { Component } from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';

const discoverMovies =
	'https://api.themoviedb.org/3/discover/movie?api_key=79ce19b11f80253ec95757f195144888&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';
class Discover extends Component {
	state = {
		discoverMovies : []
	};

	discoverMovies() {
		fetch(discoverMovies)
			.then(response => {
				console.log('discover movie', response);
				return response.json();
			})
			.then(discoverMovies => {
				console.log('discover movies', discoverMovies);
				this.setState({ discoverMovies: discoverMovies.results });
			});
	}
	componentDidMount() {
		this.discoverMovies();
	}

	render() {
		let images = this.state.discoverMovies.map((movie, idx) => {
			return (
				<Col xs={12} md={4} lg={4} key={idx}>
					<Card>
						<Card.Img
							variant='top'
							src={`${imageBaseUrl}${movie.backdrop_path}`}
						/>
						<Card.Title>{movie.title}</Card.Title>
					</Card>
				</Col>
			);
		});
		return (
			<Container>
				<Row>{images}</Row>
			</Container>
		);
	}
}

export default Discover;
