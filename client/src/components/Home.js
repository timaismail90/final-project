import React, { Component } from 'react';
import '../home.css'
import { Redirect } from 'react-router-dom';
import {Form, Row, Col, Button, Container} from 'react-bootstrap';
import backgroundHome from '../collabhomepageanimated.gif';
const axios = require("axios");
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {redirect: false};
  }

  setRedirect() {
    this.setState({redirect: true})
  }
  onFormSubmit = (e) =>{
 
    e.preventDefault();
   
    axios.post("/login")
        .then((response) => {
          console.log(response.data)
         return this.setRedirect(response.data.img)
  })

}
  render () {
    if (this.state.redirect) {
      return (<Redirect to="/upload" />);
    }
   return (
    <div>
    <Container>
      <Row>
        <Col sm={4}>

          <h1 className="title">Collab&#174;</h1>
          <h2 className="subtitle">Collaborate for the sake of art</h2>

          <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Col>
                <Form.Control plaintext defaultValue="Enter your email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Col>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
          
            <Button onSubmit={this.onFormSubmit} variant="outline-success" size="lg" className="loginButton">
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