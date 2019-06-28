import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import '../Styles/Result.css';

const Result = props => {
	let images = props.results.map((result, idx) => {
		let image = `https://image.tmdb.org/t/p/w500/${result.poster_path}`;

		return (
			<Col xs={12} md={4} lg={3} key={idx}>
				<Card className='result_images'>
					<Card.Img variant='top' src={image} />
				</Card>

				<div className='hover_icons'>
					<h1>hello</h1>
				</div>
			</Col>
		);
	});
	return (
		<Container>
			<Row>{images}</Row>
		</Container>
	);
};

export default Result;
