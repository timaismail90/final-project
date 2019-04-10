import React, {Component} from 'react';
import '../requests.css';
import requestBackground from '../collabrequests.jpg';
import {Row, Col, Container, Button, Card} from 'react-bootstrap';
import Navigation from './Navbar.js'
import { Link } from 'react-router-dom';
const axios = require("axios");

class Requests extends Component {
  constructor(props) {
    super(props);
    this.state={
      requestmade:[]
    }
  }
  componentDidMount () {
    var id = this.props.user.id
    var url = '/'+id+'/photographerrequest'
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
let request = this.state.requestmade.map((request, i) => {
  
  if(this.props.connected){
    return (
      <div className="request-box">
      <button variant="success">
      <a href="http://localhost:3000/messages">Messages</a>
      </button>
    
   </div>)

  } else if (this.props.del)  {
return(
  <div>
    <h1>No Pending Messages</h1>
  </div>
)

} 
else{
  if(!i===0){
  return (
    <div className="request-box">
   <img className="request-photo" src={request.profilepic} />
   <h4 className="request-name">{request.name}</h4>
   <span className="request-buttons">
   <Button onClick={this.props.accept} className="request-accept" variant="success">Accept</Button>
   <Button onClick={this.props.delete.bind(this, request.id)}className="request-decline" variant="outline-danger">Decline</Button>
   </span>
 </div>)
  }
}

}
)
  return (
  <div>
  <Navigation user={this.props.user}/>

  <Container>
    <Row>
      <Col sm={8}>
      <h1 className="pending-requests">Pending <span className="cursive-requests">Requests</span></h1>
{request}
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
export default Requests;