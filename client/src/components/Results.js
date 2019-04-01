import React from 'react';
import '../results.css'
import {Container, Row, Col, Button, Carousel} from 'react-bootstrap';
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
    </Carousel>;
    </div>

    <Container>
      <Row>
    <Col sm><img className="result" src="https://images.unsplash.com/photo-1548353396-ee9afe09f4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" /></Col>
    <Col sm><img className="result" src="https://images.unsplash.com/photo-1547285864-d3aa7596b175?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80" /></Col>
    <Col sm><img className="result" src="https://images.unsplash.com/photo-1547825727-ae653b92ea52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></Col>
      </Row>

      <Row>
    <Col sm><img className="result" src="https://images.unsplash.com/photo-1543307711-f083bc0afbfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80" /></Col>
    <Col sm><img className="result" src="https://images.unsplash.com/photo-1543405075-f0d9e0457476?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></Col>
    <Col sm><img className="result" src="https://images.unsplash.com/photo-1524840236425-0e7905b6f19a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" /></Col>
      </Row>
    </Container>;
  </div>
  )
};

export default Results;
