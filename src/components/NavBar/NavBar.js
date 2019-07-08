import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBar from './SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import '../Styles/NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
          <Navbar.Brand href="/" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="mr-auto">
              <Nav.Item>
                <LinkContainer to="/">
                  <Nav.Link>
                    <FontAwesomeIcon icon={faCoffee} />
                  </Nav.Link>
                </LinkContainer>
              </Nav.Item>

              <Nav.Item>
                <LinkContainer to="/discover">
                  <Nav.Link>Discover</Nav.Link>
                </LinkContainer>
              </Nav.Item>

              <Nav.Item>
                <LinkContainer to="/now-playing">
                  <Nav.Link>Now Playing</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/top-rated">
                  <Nav.Link>Top Rated</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
            <SearchBar handleSubmit={this.props.handleSubmit} />
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}
export default NavBar
