import React from 'react'
import './Styles/LoadingSpinner.css'
import { Spinner } from 'react-bootstrap';



const LoadingSpinner = () =>
(
<div className="outer-div">
<Spinner animation="border" role="status" className="spinner" />
    
</div>)

export default LoadingSpinner;