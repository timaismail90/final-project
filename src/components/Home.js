import React from 'react';
import '../home.css'
import {Form, Row, Col, Button} from 'react-bootstrap';

const Home = () => {
  return (

      <div className="home-page">

        <h1 className="title"> COLLAB</h1>
        <h2 className="subtitle">Collaborate for the sake of art</h2>

      <div className="login">
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
      </Form>

      <Button variant="outline-success" size="lg">
      Login
      </Button>

      </div>
      <img src="../collabhomepage-copy.jpg" />
      </div>
  )
};

export default Home;