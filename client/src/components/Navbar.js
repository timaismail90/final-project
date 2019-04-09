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
       <span className="icons"><Link to="/photographer"><i class="fas fa-user" title="PROFILE"></i></Link></span>
       <span className="icons"><Link to="/upload"><i class="fab fa-searchengin" title="UPLOAD"></i></Link></span>
       <span className="icons"><Link to="/pending"><i class="fas fa-users" title="CONNECTION"></i></Link></span>
       <span className="icons"><Link to="/messages"><i class="fas fa-envelope" title="MESSAGE"></i></Link></span>
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
        <span className="icons"><Link to="/photographer"><i class="fas fa-user" title="PROFILE"></i></Link></span>
        <span className="icons"><Link to="/requests"><i class="fas fa-users" title="CONNECTION"></i></Link></span>
        <span className="icons"><Link to="/messages"><i class="fas fa-envelope" title="MESSAGE"></i></Link></span>
      </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    </div>
    )

}

  };
}

export default Navigation;
