import React, {Component} from 'react';
import '../results.css'
import {Container, Row, Col, Button, Carousel, Card} from 'react-bootstrap';
import carouselOne from '../carousel1.jpg';
import carouselTwo from '../carousel2.jpg';
import carouselThree from '../carousel3.jpg';
import Navigation from './Navbar.js'
import {withRouter} from 'react-router-dom';
import Loading from "./Loading"

class Results extends Component {
  constructor(props) {
    super(props);
    this.state= {loading:true}
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({loading:false})
    }, 15000)
  }

  render() {
    if(this.state.loading) {
      console.log(this.props.location.state)
      return <Loading labels= {this.props.location.state}/>;
    }
    return (<div>
      <div>
        <Carousel>
          {
            [carouselOne, carouselTwo, carouselThree].map(c =>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={c}
                />
              </Carousel.Item>)
          }
        </Carousel>

        <h2 className="title-found"><span className="cursive-photographer">Photographers</span> Who Match</h2>

        <Container>
          <Row>
            <Col sm>
              <Card style={{ width: '18rem' }}>
                < Card.Img variant = "top"
                src="https://images.unsplash.com/photo-1548353396-ee9afe09f4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" />
                <Card.Body>
                  <Card.Text>Hal Gal </Card.Text>
                  <Button variant="outline-success">Collab!</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card style={{ width: '18rem' }}>
                < Card.Img variant = "top"
                src="https://images.unsplash.com/photo-1548353396-ee9afe09f4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" />
                <Card.Body>
                  <Card.Text>Hal Gal </Card.Text>
                  <Button variant="outline-success">Collab!</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card style={{ width: '18rem' }}>
                < Card.Img variant = "top"
                src="https://images.unsplash.com/photo-1548353396-ee9afe09f4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" />
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
                src="https://images.unsplash.com/photo-1548353396-ee9afe09f4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" />
                <Card.Body>
                  <Card.Text>Hal Gal </Card.Text>
                  <Button variant="outline-success">Collab!</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card style={{ width: '18rem' }}>
                < Card.Img variant = "top"
                src="https://images.unsplash.com/photo-1548353396-ee9afe09f4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" />
                <Card.Body>
                  <Card.Text>Hal Gal </Card.Text>
                  <Button variant="outline-success">Collab!</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card style={{ width: '18rem' }}>
                < Card.Img variant = "top"
                src="https://images.unsplash.com/photo-1548353396-ee9afe09f4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" />
                <Card.Body>
                  <Card.Text>Hal Gal </Card.Text>
                  <Button variant="outline-success">Collab!</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>);
  }
}
export default  withRouter(Results);
