
import React, {Component} from 'react';

class ReqPhotographer extends React.Component {
    constructor () {
        super ();
    }

render(){

    return (
        <div>
        <Navigation/>
       <div className="photographer-profile">
           <img className="profile-photo" src={this.state.user[0].user.profile_image.large} />
           <h1 className="photographer-name">{this.state.user[0].user.name}</h1>
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

}
   export default ReqPhotographer;
   