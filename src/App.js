import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Result from './components/Result/Result';
import Index from './components/Routes/Index';
import Search from './components/Routes/Search';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
	state = {
		// user       : null,
		// isLoggedIn : false,
		results : []
	};

	handleSubmit = value => {
		//encodeurl makes a valid string for url
		let urlEncodedValue = encodeURIComponent(value);

		let url = `https://api.themoviedb.org/3/search/movie?api_key=79ce19b11f80253ec95757f195144888&query=${urlEncodedValue} `;

		fetch(url)
			.then(response => response.json())
			.then(searchData => {
				console.log(searchData);
				this.setState({
					results : searchData.results
				});
			})
			.catch(error => console.log('there is an error', error));
	};

	render() {
		return (
			<div>
				<NavBar handleSubmit={this.handleSubmit} />

				<Route path='/' exact component={Index} />
				<Route path='/search/' component={Search} />

				<Result results={this.state.results} />
			</div>
		);
	}
}
export default App;
