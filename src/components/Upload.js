import React from 'react';
import '../upload.css'
import {Form, Row, Col, Button} from 'react-bootstrap';

const Upload = () => {
  return (
  <div className="upload-page">

    <p className="upload"> Which styles are you feeling today? </p>
    <form action='/api/images' method="post" enctype="multipart/form-data">
    <input type='file' name='image' className="upload-photo" />
    </form>
     <img src="../collabupload-copy.jpg" />
    </div>
  );
};

export default Upload;