import React from 'react';
import '../loading.css'
import {Spinner, Button} from 'react-bootstrap';
import backgroundLoading from '../collabloading.jpg';

const Loading = () => {
  return (
    <div >



     <img className="loadingBackground" src={backgroundLoading} />

    <div className="keywordSection">
    <h2 className="keywordTitle">Keywords Detected: </h2>
    <h4 className="keywordDetected">Fashion</h4>
    <br/>
    <br/>
    <br/>

     <Button variant="outline-success" size="lg">
      View Photographers!
     </Button>
      <br/>
      <br/>
      <br/>
     </div>

    </div>
  );
};

export default Loading;