import React, { Component } from 'react';
import '../select.css'
import {Form, Row, Col, Button, Container} from 'react-bootstrap';
import selectPhotographer from '../photog.jpg';
import selectInfluencer from '../influencer.jpg';


class Select extends Component {
render () {
  return (

    <div>
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