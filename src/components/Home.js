import React from 'react';
import '../home.css'
import {Form, Row, Col, Button, Container} from 'react-bootstrap';
import backgroundHome from '../collabhomepage-copy.jpg';

const Home = () => {
  return (

  <div>
  <Container>
    <Row>
      <Col sm={4}>

        <h1 className="title"> COLLAB</h1>
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
      </Form>

      <Button variant="outline-success" size="lg">
      Login
      </Button>

      </Col>

      <Col sm={8}>
        <img className="homePhoto" src={backgroundHome} />
      </Col>
      </Row>
    </Container>

  </div>
  )
};

export default Home;