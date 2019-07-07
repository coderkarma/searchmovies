import React from 'react';

const Search = ({ props, movie }) => {
	console.log('what is here', props.match.params);
	const url = `props.match.params:${movie}`;

	return (
		<div>
			<h1>Search component!</h1>
			{url}
		</div>
	);
};

export default Search;
