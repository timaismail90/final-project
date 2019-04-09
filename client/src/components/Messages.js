import React, { Component } from 'react';
import '../messages.css'
import {Form, Row, Col, Button, Container} from 'react-bootstrap';
import Navigation from './Navbar.js'


class Messages extends Component {
  render () {
  return (
  <div>
  <Navigation user={this.props.user}/>
  <Container>
  <Row>
    <Col sm={4} className="messages-left">
    <h4 className="your-connections">Your <span className="connections">Connections</span></h4>
      <div className="message-request">
        <img className="message-photo" src="https://images.unsplash.com/profile-1541499455668-3a19737a038c?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
        <h4 className="message-name">Anna Karenina</h4>
      </div>
      <div className="message-request">
        <img className="message-photo" src="https://images.unsplash.com/profile-1541499455668-3a19737a038c?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
        <h4 className="message-name">Anna Karenina</h4>
      </div>
      <div className="message-request">
        <img className="message-photo" src="https://images.unsplash.com/profile-1541499455668-3a19737a038c?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
        <h4 className="message-name">Anna Karenina</h4>
      </div>
    </Col>

    <Col sm={8} className="messages-right">
      <div className="influencer-section">
        <h4 className="message-influencer">Hey! Loving your portfolio.</h4>
      </div>
      <div className="photographer-section">
      <h4 className="message-photographer">Thanks. Let's collab!</h4>
      </div>

    <div className="textarea">
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Type your message here" />
      </Form.Group>
    </Form>
     </div>
    </Col>
  </Row>
</Container>
</div>
    )
  };

}

export default Messages;