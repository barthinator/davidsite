import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './views/Navigation';
import Project from './views/Project';
import Home from './views/Home';
import Top from './views/Top';
import SingleAnimation from "./views/SingleAnimation";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="center-top">
            <h2>David Bartholomew</h2>
            <Navigation></Navigation>
          </div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Project" component={Project}/>
          <Route exact path="/single-animations" component={SingleAnimation} />
        </div>
      </Router>
    );
  }
}

export default App;
