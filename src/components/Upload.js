import React from 'react';
import '../upload.css';
import backgroundUpload from '../collabupload-copy.jpg';
import {Form, Row, Col, Container, Button} from 'react-bootstrap';


const Upload = () => {
  return (
  <div className="upload-page">

<Container>
  <Row>
    <Col sm={4}>
      <p className="upload"> Which <span className="styles">styles</span> are you feeling today? </p>
      <form action='/api/images' method="post" enctype="multipart/form-data">
        <input type='file' name='image' className="upload-photo" />
      </form>
    </Col>
    <Col sm={8}>
      <img className="background-upload" src={backgroundUpload} />
    </Col>
    </Row>
  </Container>
  </div>
  );
};

export default Upload;