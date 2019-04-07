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
 this.state = {photographer:[]};
 };
 componentDidMount () {
   fetch('https://api.unsplash.com/users/joerobles/photos/?client_id=b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8')
   .then(results => {
     return results.json();
   })
   .then(data => { this.setState({photographer:data})
   console.log(data)
   })
 }
 render() {
   let photographr = this.state.photographer.map(photographer =>{
     return (
    <PhotographerPortfolio photographer = {photographer}/>)
   })
   if (this.state.photographer[0]) {
     return (
       <div>
        <Navigation/>
       <div className="photographer-profile">
           <img className="profile-photo" src={this.state.photographer} />
           <h1 className="photographer-name">{this.state.photographer[0].user.name}</h1>
           <h2 className = "photographer-location" > 📍 <span className="location">Toronto</span></h2>
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




