import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SearchBar from './SearchBar';

class NavBar extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar bg='light' expand='lg'>
					<Navbar.Brand href='#home'>Logo</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link href='#home'>Home</Nav.Link>
							<Nav.Link href='#link'>Link</Nav.Link>
						</Nav>
						<SearchBar handleSubmit={this.props.handleSubmit} />
					</Navbar.Collapse>

					{/* <pre>{JSON.stringify(this.state.result, null, 2)}</pre> */}
				</Navbar>
			</React.Fragment>
		);
	}
}
export default NavBar;
