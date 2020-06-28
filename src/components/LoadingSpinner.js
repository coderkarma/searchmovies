import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Styles/LoadingSpinner.css';

const LoadingSpinner = () => (
	<div className='spinner-div'>
		<Spinner animation='border' role='status' className='spinner' />
	</div>
);

export default LoadingSpinner;
