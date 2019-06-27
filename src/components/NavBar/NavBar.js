import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '../Styles/NavBar.css';

class NavBar extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar expand='lg' className='nav-bar sticky-top'>
					<Navbar.Brand href='/' />
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav '>
						<Nav className='mr-auto'>
							<Nav.Link href='/'>
								<FontAwesomeIcon icon={faCoffee} />
							</Nav.Link>
							<Nav.Link href='/discover'>Discover</Nav.Link>
							<Nav.Link href='/now-playing'>Now Playing</Nav.Link>
							<Nav.Link href='/top-rated'>Top Rated</Nav.Link>

							<SearchBar handleSubmit={this.props.handleSubmit} />
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</React.Fragment>
		);
	}
}
export default NavBar;
