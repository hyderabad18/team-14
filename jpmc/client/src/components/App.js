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
import AdminView from './AdminView';
import CorpReg from './CorpReg';
import StudentReg from './StudentReg';
import Home from './Home';
import LogIn from './LogIn';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route path = "/student" render = {() => <StudentView/>}/>
        <Route path = "/admin" render = {() => <AdminView/>}/>
        <Route path = "/corpreg" render = {() => <CorpReg/>}/>
        <Route path = "/studentreg" render = {() => <StudentReg/>}/>
        <Route path = "/login" render = {() => <LogIn/>}/>
        <Route exact path = "/" render = {() => <Home/>}/>
      </div>
      </Router>
    );
  }
}

export default App;
