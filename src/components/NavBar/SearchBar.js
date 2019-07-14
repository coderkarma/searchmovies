import React, { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { withRouter } from 'react-router';
import '../Styles/SearchBar.css';

class SearchBar extends Component {
	state = {
		value : ''
	};

	handleSubmit = e => {
		e.preventDefault();
		// replace the space of all occurances , i is case sensitive
		if (this.state.value.replace(/\s/gi) !== '') {
			this.props.history.push(`/search/${this.state.value}`);
		}
		this.setState({
			value : ''
		});
	};

	render() {
		return (
			<Form inline onSubmit={this.handleSubmit} className='formWrapper'>
				<FormControl
					id='input-field'
					type='text'
					placeholder='Search Movies...'
					className='mr-sm-2'
					onChange={e => this.setState({ value: e.target.value })}
					value={this.state.value}
				/>
				<Button type='submit' variant='outline-success'>
					Search
				</Button>
			</Form>
		);
	}
}
export default withRouter(SearchBar);
