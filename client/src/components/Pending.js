import React, {Component} from 'react';
import '../pending.css';
import requestBackground from '../collabrequestsphotog.jpg';
import {Row, Col, Container, Button, Card} from 'react-bootstrap';
import Navigation from './Navbar.js'
const axios = require("axios");

class Pending extends Component {
  constructor(props) {
    super(props);
    this.state={
      requestmade:[],
      unsplashApi:[]
    }
  }
  componentDidMount () {
    var id = this.props.user.id
    var url = '/'+id+'/influencerrequest'
    fetch(url)
    .then(results => {
      return results.json();
    })
    .then(data => { this.setState({requestmade:data})
    })
    .catch(function (error) {
      console.log(error);
    });

    }

  render(){
let request = this.state.requestmade.map(request=> {
    return (<div className="request-box">
    <img className="request-photo" src={request.profilepic} />
    <h4 className="request-name">{request.name}</h4>
    <h2 className = "photographer-bio" >{request.bio}</h2>
      <span className="pending-buttons">
    <Button className="request-pending" variant="success" disabled>Pending</Button>
      </span>
  </div>)
})

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
let filteredRequest = request.filter( onlyUnique )

  return (
  <div>
  <Navigation user={this.props.user}/>

  <Container>
    <Row>
      <Col sm={8}>
      <h1 className="pending-requests">Pending <span className="cursive-requests">Connections</span></h1>
       {filteredRequest}
      </Col>


      <Col sm={4}>
      <img className="background-requests" src={requestBackground} />
      </Col>
    </Row>
  </Container>



  </div>
  );
};
}
export default Pending;