import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./components/Home"
import Loading from "./components/Loading"
import Upload from "./components/Upload"
import Error from "./components/Error"
import Photographer from "./components/Photographer"
import Results from "./components/Results"
import Requests from "./components/Requests"
import Select from "./components/Select.js"
import Messages from "./components/Messages.js"
const axios = require("axios");


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     user: [],
     match:[],
     labels:""
    };
  }
 
  
  render() {
    return (

      <BrowserRouter>
      <Switch>
        <Route path="/" render={(props) => <Home user = {this.state.user}/>} exact/>
        <Route path="/select"  component={Select} />
        {/* <Route path="/loading" render={(props) => <Loading user ={this.state.user} />}  /> */}
        <Route path="/upload" component={Upload}/>
        <Route path="/photographer" component={Photographer} />
        <Route path="/results" component={Results} />
        <Route path="/requests"  component={Requests} />
        <Route path="/messages" component={Messages} />
        <Route component={Error} />
      </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
