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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     user: [],
     file: null
    };
  }


  
  
  render() {
    return (

      <BrowserRouter>
      <Switch>
        <Route path="/" User = {this.state.user} component={Home} exact />
        <Route path="/select" User = {this.state.user} component={Select} exact />
        <Route path="/loading" User = {this.state.user} component={Loading} />
        <Route path="/upload" User = {this.state.user} component={Upload} />
        <Route path="/photographer" User = {this.state.user} component={Photographer} />
        <Route path="/results" User = {this.state.user} component={Results} />
        <Route path="/requests" User = {this.state.user} component={Requests} />
        <Route path="/messages" User = {this.state.user} component={Messages} />
        <Route component={Error} />
      </Switch>
      </BrowserRouter>

    )
  }
}

export default App;
