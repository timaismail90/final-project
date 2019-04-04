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
  render() {
    return (

      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/select" component={Select} exact />
        <Route path="/loading" component={Loading} />
        <Route path="/upload" component={Upload} />
        <Route path="/photographer" component={Photographer} />
        <Route path="/results" component={Results} />
        <Route path="/requests" component={Requests} />
        <Route path="/messages" component={Messages} />
        <Route component={Error} />
      </Switch>
      </BrowserRouter>

    )
  }
}

export default App;
