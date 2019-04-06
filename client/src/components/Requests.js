import React, {Component} from 'react';
import '../requests.css';
import requestBackground from '../collabrequests.jpg';
import {Row, Col, Container, Button, Card} from 'react-bootstrap';
import Navigation from './Navbar.js'

class Requests extends Component {
  constructor(props) {
    super(props);
  }

  render(){
  return (
  <div>
  <Navigation/>

  <Container>
    <Row>
      <Col sm={8}>
      <h1 className="pending-requests">Pending <span className="cursive-requests">Requests</span></h1>
         <div className="request-box">
          <img className="request-photo" src="https://images.unsplash.com/profile-1541499455668-3a19737a038c?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
          <h4 className="request-name">Amelia Clarke</h4>
            <span className="request-buttons">
          <Button className="request-accept" variant="success">Accept</Button>
          <Button className="request-decline" variant="outline-danger">Decline</Button>
            </span>
        </div>

        <div className="request-box">
          <img className="request-photo" src="https://images.unsplash.com/profile-1541499455668-3a19737a038c?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
          <h4 className="request-name">Angela Yang</h4>
            <span className="request-buttons">
          <Button className="request-accept" variant="success">Accept</Button>
          <Button className="request-decline" variant="outline-danger">Decline</Button>
            </span>
        </div>

        <div className="request-box">
          <img className="request-photo" src="https://images.unsplash.com/profile-1541499455668-3a19737a038c?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
          <h4 className="request-name">Anna Karenina</h4>
            <span className="request-buttons">
          <Button className="request-accept" variant="success">Accept</Button>
          <Button className="request-decline" variant="outline-danger">Decline</Button>
            </span>
        </div>
      </Col>


      <Col sm={4}>
      <img className="background-requests" src={requestBackground} />
      </Col>
    </Row>
  </Container>



  </div>
  );
};
}
export default Requests;