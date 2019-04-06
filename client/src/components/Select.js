import React, { Component } from 'react';
import '../select.css'
import {Form, Row, Col, Button, Container, Navbar} from 'react-bootstrap';
import selectPhotographer from '../photog.jpg';
import selectInfluencer from '../influencer.jpg';


class Select extends Component {
render () {
  return (

    <div>
    {/* <Navbar>
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
      </Navbar> */}

      <h1 className="begin-journey">Begin Your <span className="journey">Journey</span></h1>
      <Container>
      <Row>
        <Col xs={6}>
          <img className="select-influencer" src={selectInfluencer} />
          <h4 className="description-influencer">Influencer</h4>
        </Col>
        <Col xs={6}>
          <img className="select-photographer" src={selectPhotographer} />
          <h4 className="description-photographer">Photographer</h4>
        </Col>
      </Row>
    </Container>

    </div>
    )
  };

}

export default Select;