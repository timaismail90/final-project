import React, { Component } from 'react';
import '../navbar.css'
import {Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Navigation extends Component {
  constructor () {
    super ();
    }
render () {
if(this.props.user.type === "influencer"){

  return (
    <div>
    <Navbar className="nav-bar">
      <Navbar.Brand className="brand">Collab</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <span className="icons"><i class="fas fa-envelope"></i></span>
       <Link to="/photographer"><span className="icons"><i class="fas fa-user"></i></span></Link>
        <Link to="/upload"> <span className="icons"><i class="fa fa-upload" aria-hidden="true"></i></span></Link>
      </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    </div>
    )

} else {

  return (
    <div>
    <Navbar className="nav-bar">
      <Navbar.Brand className="brand">Collab</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <span className="icons"><i class="fas fa-envelope"></i></span>
        <Link to="/photographer"><span className="icons"><i class="fas fa-user"></i></span></Link>
      </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    </div>
    )

}

  };
}

export default Navigation;
