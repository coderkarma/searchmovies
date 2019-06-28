import React, { Component } from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';

const nowPlayingMovies =
	'https://api.themoviedb.org/3/movie/now_playing?api_key=79ce19b11f80253ec95757f195144888&language=en-US&page=1';

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';

class NowPlaying extends Component {
	state = {
		playingMovies : [],
		hover: false
	};

	nowPlayingMovies() {
		fetch(nowPlayingMovies)
			.then(response => {
				console.log('check now playing movies', response);
				return response.json();
			})
			.then(playingMovies => {
				console.log('check the popular movies response', playingMovies);
				this.setState({ playingMovies: playingMovies.results });
			});
	}
	componentDidMount() {
		this.nowPlayingMovies();
	}

	render() {
		let images = this.state.playingMovies.map((movie, idx) => {
			return (
				<Col xs={12} md={4} lg={4} key={idx} className='my-4'>
					<Card className='my-3 h-100 shadow'>
						<Card.Img
							variant='top'
							src={`${imageBaseUrl}${movie.backdrop_path}`}
						/>
						<Card.Body>
							<Card.Title>{movie.title}</Card.Title>
						</Card.Body>
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

export default NowPlaying;
