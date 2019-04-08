import React, { Component } from 'react';
import '../home.css'
import { Redirect } from 'react-router-dom';
import {Form, Row, Col, Button, Container} from 'react-bootstrap';
import backgroundHome from '../collabhomepageanimated.gif';
import Navigation from './Navbar.js'


const axios = require("axios");
class Home extends Component {
  constructor(props) {
    super(props);
    
  }


  render () {
    console.log(this.props)
    if (this.props.user.type === "influencer" && this.props.fireRedirect) {
      return (<Redirect to="/photographer" />);
    }
    if (this.props.user.type === "photographer" && this.props.fireRedirect) {
      return (<Redirect to="/messages" />);
    }
   return (
    <div>
    <Navigation/>
    <Container>
      <Row>
        <Col sm={4}>

          <h1 className="title">Collab&#174;</h1>
          <h2 className="subtitle">Collaborate for the sake of art</h2>

          <Form onSubmit={this.props.onLogin} >

            <Form.Group as={Row} controlId="username">
              <Col>
                <Form.Control type= "username" defaultValue={this.props.username}
              onChange={this.props.handleChange} plaintext placeholder="Enter your email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}  controlId="formPlaintextPassword">
              <Col>
                <Form.Control type="password"placeholder="Password" />
              </Col>
            </Form.Group>

            <Button type="submit" variant="outline-success" size="lg" className="loginButton">
              Login
            </Button>
          </Form>
        </Col>

        <Col sm={8}>
          <img className="homePhoto" src={backgroundHome} />
        </Col>
        </Row>
      </Container>

    </div>
    )
  };

}

export default Home;