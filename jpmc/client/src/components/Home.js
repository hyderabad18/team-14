import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <Router>
      <div className="Home">
        <h1>Front-end home page </h1>
      </div>
      </Router>
    );
  }
}

export default Home;
