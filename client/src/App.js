import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './views/Navigation'
import Project from './views/Project'
import Home from './views/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation></Navigation>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Project" component={Project}/>
        </div>
      </Router>
    );
  }
}

export default App;
