import React from 'react';
import '../results.css'
import {Container, Row, Col, Button, Carousel, Card} from 'react-bootstrap';
import carouselOne from '../carousel1.jpg';
import carouselTwo from '../carousel2.jpg';
import carouselThree from '../carousel3.jpg';

const Results = () => {
  return (

  <div>

    <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselOne}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselTwo}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselThree}
        />
      </Carousel.Item>
    </Carousel>
    </div>

  <h2 className="title-found"><span className="cursive-photographer">Photographers</span> Who Match</h2>

    <Container>
      <Row>

    <Col sm>
      <Card style={{ width: '18rem' }}>
        < Card.Img variant = "top"
        src = "https://images.unsplash.com/photo-1548353396-ee9afe09f4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" / >
        <Card.Body>
          <Card.Text>Hal Gal </Card.Text>
          <Button variant="outline-success">Collab!</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col sm>
      <Card style={{ width: '18rem' }}>
        < Card.Img variant = "top"
        src = "https://images.unsplash.com/photo-1548353396-ee9afe09f4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" / >
        <Card.Body>
          <Card.Text>Hal Gal </Card.Text>
          <Button variant="outline-success">Collab!</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col sm>
      <Card style={{ width: '18rem' }}>
        < Card.Img variant = "top"
        src = "https://images.unsplash.com/photo-1548353396-ee9afe09f4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" / >
        <Card.Body>
          <Card.Text>Hal Gal </Card.Text>
          <Button variant="outline-success">Collab!</Button>
        </Card.Body>
      </Card>
    </Col>
      </Row>

      <Row>
    <Col sm>
      <Card style={{ width: '18rem' }}>
        < Card.Img variant = "top"
        src = "https://images.unsplash.com/photo-1548353396-ee9afe09f4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" / >
        <Card.Body>
          <Card.Text>Hal Gal </Card.Text>
          <Button variant="outline-success">Collab!</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col sm>
      <Card style={{ width: '18rem' }}>
        < Card.Img variant = "top"
        src = "https://images.unsplash.com/photo-1548353396-ee9afe09f4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" / >
        <Card.Body>
          <Card.Text>Hal Gal </Card.Text>
          <Button variant="outline-success">Collab!</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col sm>
       <Card style={{ width: '18rem' }}>
        < Card.Img variant = "top"
        src = "https://images.unsplash.com/photo-1548353396-ee9afe09f4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" / >
        <Card.Body>
          <Card.Text>Hal Gal </Card.Text>
          <Button variant="outline-success">Collab!</Button>
        </Card.Body>
      </Card>
    </Col>
      </Row>
    </Container>;
  </div>
  )
};

export default Results;
