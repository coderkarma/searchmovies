import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
							<Nav.Link>
								<Link to='/'>
									<FontAwesomeIcon icon={faCoffee} />
								</Link>
							</Nav.Link>

							<Nav.Link>
								<Link to='/discover'> Discover</Link>
							</Nav.Link>

							<Nav.Link>
								<Link to='/now-playing'> Now Playing</Link>
							</Nav.Link>

							<Nav.Link>
								<Link to='/top-rated'>Top Rated</Link>
							</Nav.Link>

							<SearchBar handleSubmit={this.props.handleSubmit} />
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</React.Fragment>
		);
	}
}
export default NavBar;
