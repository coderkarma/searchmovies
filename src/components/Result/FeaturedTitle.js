import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const trendingAll =
    'https://api.themoviedb.org/3/trending/all/day?api_key=79ce19b11f80253ec95757f195144888';

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

const TrendingShows = props => {
	const [ trending, setTrendingShowstate ] = useState([]);

	useEffect(() => {
		fetch(trendingAll)
			.then(response => response.json())
			.then(trendingShows => {
				console.log('Here are the trending shows ', trendingShows);

				const trendingAllShows = trendingShows.results;
				setTrendingShowstate(trendingAllShows);
			});
	}, []);

	const trendingShows = trending.map((trendingShow, idx) => {
		return (
			<Col xs={12} md={4} lg={4} key={idx} className='my-4'>
				<Card className='my-3 h-100 card'>
					<Card.Img
						variant='top'
						src={`${imageBaseUrl}${trendingShow.backdrop_path}`}
					/>
					<Card.Body>
						<Card.Title>{trendingShow.title}</Card.Title>
					</Card.Body>
				</Card>
			</Col>
		);
	});
	return (
		<Container>
           <h1>Trending Shows</h1>
			<Row>{trendingShows}</Row>
		</Container>
	);
};

export default TrendingShows;
