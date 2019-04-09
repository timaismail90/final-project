import React from 'react';
import '../photographer.css'
import {Container, Row, Col, Button} from 'react-bootstrap';
import backgroundLoading from '../collabloading.jpg';
import Navigation from './Navbar.js'

function PhotographerPortfolio (prop){
 return(
 <div>
<Col sm><img className="portfolio" src={prop.photographer.urls.full} /></Col>
</div>)
}


class Photographer extends React.Component {
 constructor () {
 super ();
 this.state = {
   user:[]
 }

 };
 componentDidMount () {

 var url = this.props.user.unsplashAPI
   fetch(url)
   .then(results => {
     return results.json();
   })
   .then(data => { this.setState({user:data})
   console.log(data)
   })
 }
 render() {
   let photographr = this.state.user.map(photographer =>{
     return (
    <PhotographerPortfolio photographer = {photographer}/>)
   })
   if (this.state.user[0]) {
     return (
       <div>
        <Navigation user={this.props.user}/>
       <div className="photographer-profile">
           <img className="profile-photo" src={this.state.user[0].user.profile_image.large} />
           <h1 className="photographer-name">{this.state.user[0].user.name}</h1>
           <h2 className = "photographer-location" > 📍 <span className="location">Toronto</span></h2>
           <h2 className = "photographer-bio" >A cat mom, software engineer, and fashion blogger. Love all things beautiful. Connect with me to collaborate.</h2>
          </div>
           <Container>
            <Row>
           {photographr}
           </Row>
           </Container>
        </div>
         )
   }
   else {
     return false
   }
   }
 }
export default Photographer;




