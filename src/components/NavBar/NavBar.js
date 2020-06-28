import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

const NavBar = () => {
	return (
		<React.Fragment>
			<Navbar expand='lg' bg='dark' variant='dark' sticky='top'>
				<Navbar.Brand href='/' />
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav '>
					<Nav className='mr-auto'>
						<Nav>
							<Link to='/'>
								<FontAwesomeIcon icon={faCoffee} />
							</Link>
						</Nav>

						<Nav>
							<Link to='/discover'> Discover</Link>
						</Nav>

						<Nav>
							<Link to='/now-playing'> Now Playing</Link>
						</Nav>

						<Nav>
							<Link to='/top-rated'>Top Rated</Link>
						</Nav>

						<SearchBar />
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</React.Fragment>
	);
};
export default NavBar;
