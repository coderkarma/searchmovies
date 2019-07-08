import React from 'react';
import { baseUrl, key } from '../../api';
import SharedResults from '../Routes/SharedResults';

const Search = ({ match: { params: { movie } } }) => {
	const url = `${baseUrl}/search/movie?${key}&query=${encodeURI(movie)}`;
	return <SharedResults url={url} />;
};

export default Search;
