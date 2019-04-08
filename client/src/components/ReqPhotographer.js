
import React, {Component} from 'react';
import '../photographer.css'
import {Container, Row, Col, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Navigation from './Navbar.js'
import { timingSafeEqual } from 'crypto';


class ReqPhotographer extends Component {
    constructor (props) {
        super (props);
        this.state={
            match:[]
        }
    }




    componentDidMount () {
        var url = this.props.photographerMatch.unsplashApi
          fetch(url)
          .then(results => {
            return results.json();
          })
          .then(data => { this.setState({match:data})
          })
        }

render(){
    let photographr = this.state.match.map(photographer =>{
        return (
        <Col sm><img className="portfolio" src={photographer.urls.full} /></Col> )
      })
    if(this.state.match.length === 0){
        return(
            <h1></h1>
        )

    } else{
        if(this.props.fireRedirect){
            return <Redirect to="/requests" />
         }
        return (
        <div>
        <Navigation user={this.props.user}/>
        <div className="photographer-profile">
           <img className="profile-photo" src={this.state.match[0].user.profile_image.large} />
           <h1 className="photographer-name">{this.state.match[0].user.name}</h1>
           <h2 className = "photographer-location" > 📍 <span className="location">Toronto</span></h2>
           <Button variant="success" onClick={this.props.onClickMessage} className="collab-button">Send A Request!</Button>
        </div>
           <Container>
            <Row>
        {photographr}
           </Row>
           </Container>

        </div>

        )
}
}
}
   export default ReqPhotographer;
