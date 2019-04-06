import React from 'react';
import '../loading.css'
import {Spinner} from 'react-bootstrap';
import backgroundLoading from '../collabloading.jpg';
import Navigation from './Navbar.js'

const Loading = () => {
  return (
    <div >
      <Navigation/>
    <img className="loadingBackground" src={backgroundLoading} />
    <div className="keywordSection">
    <h2 className="keywordTitle">Keywords Detected</h2>
     <div className="dots">
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="success" />
    </div>
    <h4 className="keywordDetected">Fashion</h4>
    <br/>
    <br/>
    <br/>
      <br/>
      <br/>
      <br/>
     </div>

    </div>
  );
};

export default Loading;