import React from 'react';
import '../photographer.css'
import {Container, Row, Col, Button} from 'react-bootstrap';
import backgroundLoading from '../collabloading.jpg';

const Photographer = () => {
  return (

  <div>

    <h1 className="photographer-name">Photographer I</h1>
        <h2 className="photohrapher-location">Toronto</h2>
    <Container>
      <Row>
    <Col sm><img className="portfolio" src="https://images.unsplash.com/photo-1548353396-ee9afe09f4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" /></Col>
    <Col sm><img className="portfolio" src="https://images.unsplash.com/photo-1547285864-d3aa7596b175?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80" /></Col>
    <Col sm><img className="portfolio" src="https://images.unsplash.com/photo-1547825727-ae653b92ea52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></Col>
      </Row>

      <Row>
    <Col sm><img className="portfolio" src="https://images.unsplash.com/photo-1543307711-f083bc0afbfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80" /></Col>
    <Col sm><img className="portfolio" src="https://images.unsplash.com/photo-1543405075-f0d9e0457476?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></Col>
    <Col sm><img className="portfolio" src="https://images.unsplash.com/photo-1524840236425-0e7905b6f19a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" /></Col>
      </Row>
    </Container>;
  </div>
  )
};

export default Photographer;
