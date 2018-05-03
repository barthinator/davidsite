import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './views/Navigation'
import Project from './views/Project'
import Home from './views/Home'
import Top from './views/Top'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="center-top">
            <Top></Top>
            <Navigation></Navigation>
          </div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Project" component={Project}/>
        </div>
      </Router>
    );
  }
}

export default App;
