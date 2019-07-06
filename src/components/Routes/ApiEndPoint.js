// import React, { useEffect, useState } from 'react';

// const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';

// const Discover = props => {
// 	const moviesUrl =
// 		'https://api.themoviedb.org/3/discover/movie?api_key=79ce19b11f80253ec95757f195144888&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

// 	const [ discoverMovies, setDiscoverMovies ] = useState([]);
// 	const [ showModal, setShowModal ] = useState(null);

// 	useEffect(() => {
// 		fetch(moviesUrl)
// 			.then(response => {
// 				return response.json();
// 			})
// 			.then(movies => {
// 				const movieResult = movies.results;

// 				setDiscoverMovies(movieResult);
// 			})
// 			.catch(err => console.log(err));
// 	}, []);
// };

// const NowPlaying = props => {
// 	const nowPlayingMovies =
// 		'https://api.themoviedb.org/3/movie/now_playing?api_key=79ce19b11f80253ec95757f195144888';

// 	const [ movies, setMovies ] = useState([]);
// 	const [ showModal, setShowModal ] = useState(null);

// 	useEffect(() => {
// 		fetch(nowPlayingMovies)
// 			.then(response => {
// 				return response.json();
// 			})
// 			.then(movie => {
// 				const allMovies = movie.results;
// 				console.log('here are the playing movies ', allMovies);

// 				setMovies(allMovies);
// 			})
// 			.catch(err => console.log('error ', err));
// 	}, []);
// };
// const TopRated = props => {
// 	const topRatedMovies =
//         'https://api.themoviedb.org/3/movie/top_rated?api_key=79ce19b11f80253ec95757f195144888&language=en-US&page=1';
        
// 	const [ topRated, setTopRatedState ] = useState([]);

// 	useEffect(() => {
// 		console.log('it works');
// 		fetch(topRatedMovies)
// 			.then(response => response.json())
// 			.then(topRatedMovies => {
// 				console.log('toprated movies', topRatedMovies);

// 				const topMovies = topRatedMovies.results;
// 				setTopRatedState(topMovies);
// 			});
// 	}, []);
// };

// export default { Discover, NowPlaying, TopRated };
