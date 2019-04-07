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
      console.log(this.props.location.state.keywords)
      return <Loading labels= {this.props.location.state.keywords}/>;
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
            {
              this.props.location.state.match.map(photographer =>(
               <Col sm>
              <Card style={{ width: '18rem' }}>
                <a href= >
                <Card.Img variant = "top"
                src={photographer.profilePhoto}/>
                <Card.Body>
                  <Card.Text>{photographer.name}</Card.Text>
                  <Button variant="outline-success">Collab!</Button>
                </Card.Body>
              </Card>
            </Col>))
            }
          </Row>
        </Container>
      </div>
    </div>);
    
  }
}
export default  withRouter(Results);
