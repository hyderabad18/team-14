import React, { Component } from 'react';
import '../styles/App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import StudentView from './StudentView';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route path = "/student" render = {() => <StudentView/>}/>
        <Route exact path = "/" render = {() => <Home/>}/>
      </div>
      </Router>
    );
  }
}

export default App;
