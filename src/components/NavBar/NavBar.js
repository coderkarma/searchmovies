import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SearchBar from './SearchBar';

class NavBar extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar bg='secondary' expand='lg'>
					<Navbar.Brand href='/'>Logo</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav '>
						<Nav className='mr-auto'>
							<Nav.Link href='/'>Home</Nav.Link>
							<Nav.Link href='/discover'>Discover</Nav.Link>
							<SearchBar handleSubmit={this.props.handleSubmit} />
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</React.Fragment>
		);
	}
}
export default NavBar;
