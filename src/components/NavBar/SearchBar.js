import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { withRouter } from 'react-router';
import '../Styles/SearchBar.css';

const SearchBar = (props) => {
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const { history } = props;

		if (value.replace(/\s/gi) !== '') {
			history.push(`/search/${value}`);
		}
		setValue('');
	};

	const handleChange = (e) => setValue(e.target.value);

	return (
		<Form inline onSubmit={handleSubmit} className='formWrapper'>
			<FormControl
				id='input-field'
				type='text'
				placeholder='Search Movies...'
				className='mr-sm-2'
				onChange={handleChange}
				value={value}
				required
			/>
			<Button type='submit' variant='outline-success'>
				Search
			</Button>
		</Form>
	);
};
export default withRouter(SearchBar);
