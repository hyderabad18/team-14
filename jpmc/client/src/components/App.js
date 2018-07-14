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
import CorpReg from './CorpReg';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route path = "/student" render = {() => <StudentView/>}/>
        <Route path = "/corpreg" render = {() => <CorpReg/>}/>
        <Route exact path = "/" render = {() => <Home/>}/>
      </div>
      </Router>
    );
  }
}

export default App;
