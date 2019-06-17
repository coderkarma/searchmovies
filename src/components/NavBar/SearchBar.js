import React, { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { withRouter } from 'react-router';
import '../Styles/SearchBar.css';

class SearchBar extends Component {
	state = {
		value : ''
	};

	render() {
		const { history } = this.props;
		return (
			<Form inline>
				<FormControl
					type='text'
					placeholder='Search Movies...'
					className='mr-sm-2'
					onChange={e => this.setState({ value: e.target.value })}
				/>
				<Button
					variant='outline-success'
					onClick={() => {
						if (this.state.value !== '') {
							history.push('/search');
							this.props.handleSubmit(this.state.value);
						}
					}}
				>
					Search
				</Button>
			</Form>
		);
	}
}
export default withRouter(SearchBar);
