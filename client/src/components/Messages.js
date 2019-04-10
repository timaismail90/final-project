import React, { Component } from 'react';
import '../messages.css'
import {Form, Row, Col, Button, Container} from 'react-bootstrap';
import Navigation from './Navbar.js'

function Chat (props){
 if(props.user.type === "influencer"){
  return ( 
    <div>
    <div className="influencer-section">
    <h4 className="message-photographer">Hey! Loving your portfolio.</h4>
  </div>
  <div className="photographer-section">
  <h4 className="message-influencer">Thanks. Let's collab!</h4>
  </div>
  </div>)

 } else {
  return ( 
    <div>
    <div className="influencer-section">
    <h4 className="message-influencer">Hey! Loving your portfolio.</h4>
  </div>
  <div className="photographer-section">
  <h4 className="message-photographer">Thanks. Let's collab!</h4>
  </div>
  </div>)

 }
  
}

class Messages extends Component {
  constructor () {
    super ();
    this.state = {
      messages:[]
    }
   
    };
  componentDidMount () {
    if (this.props.user.type === "influencer"){
        var id = this.props.user.id
        var url = '/'+id+'/influencerrequest'
        fetch(url)
        .then(results => {
           return results.json();
        })
        .then(data => { this.setState({messages:data})
        })
        .catch(function (error) {
          console.log(error);
        })}
        else{
          var id = this.props.user.id
          var url = '/'+id+'/photographerrequest'
          fetch(url)
          .then(results => {
             return results.json();
          })
          .then(data => { this.setState({messages:data})
          })
          .catch(function (error) {
            console.log(error);
          })}   
    }
    
    
  render () {
  let message = this.state.messages.map(function(message){
    return (<div className="message-request">
    <img className="message-photo" src={message.profilepic} />
    <h4 className="message-name">{message.name}</h4></div>)
  })

  
  return (
  <div>
  <Navigation user={this.props.user}/>
  <Container>
  <Row>
    <Col sm={4} className="messages-left">
    <h4 className="your-connections">Your <span className="connections">Connections</span></h4>
      
        {message}
       
    </Col>
    <Col sm={8} className="messages-right">
     <Chat user={this.props.user} />

    <div className="textarea">
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Type your message here" />
      </Form.Group>
    </Form>
     </div>
    </Col>
  </Row>
</Container>
</div>
    )
  };

}

export default Messages;