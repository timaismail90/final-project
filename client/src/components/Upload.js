import React from 'react';
import '../upload.css';
import backgroundUpload from '../collabupload-copy.jpg';
import {Form, Row, Col, Container, Button} from 'react-bootstrap';
const axios = require("axios");

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        file: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
}
onFormSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage',this.state.file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    axios.post("/upload",formData,config)
        .then((response) => {
          console.log(response.data)
            alert("The file is successfully uploaded");
        }).catch((error) => {
    });


  }
  onChange(e) {
    this.setState({file:e.target.files[0]});
}
  render() {
  return (
  <div className="upload-page">

<Container>
  <Row>
    <Col sm={4}>
      <p className="upload"> Which <span className="styles">styles</span> are you feeling today? </p>
      <form onSubmit={this.onFormSubmit}>
                <h1 className="file-upload">File Upload</h1>
                <input type="file" name="myImage" onChange= {this.onChange} />
                <button type="submit">Upload</button>
      </form>
    </Col>
    <Col sm={8}>
      <img className="background-upload" src={backgroundUpload} />
    </Col>
    </Row>
  </Container>
  </div>
  );
  }
}

export default Upload;