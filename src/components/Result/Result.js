import React from 'react';

const Result = props => {
	let images = props.results.map(result => {
		let image = `https://image.tmdb.org/t/p/w500/${result.poster_path}`;
		return (
			<div>
				<img src={image} alt='' />
			</div>
		);
	});
	return (
		<div>
			 {images}
		</div>
	);
};

export default Result;
