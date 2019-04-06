import React, { Component } from 'react';
import '../navbar.css'
import {Navbar} from 'react-bootstrap';


class Navigation extends Component {
render () {
  return (
    <div>
    <Navbar className="nav-bar">
      <Navbar.Brand className="brand">Collab</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <span className="icons"><i class="fas fa-envelope"></i></span>
        <span className="icons"><i class="fas fa-user"></i></span>
        <span className="icons"><i class="fas fa-search"></i></span>
        <span className="icons"><i class="fas fa-user-plus"></i></span>
      </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    </div>
    )
  };
}

export default Navigation;
