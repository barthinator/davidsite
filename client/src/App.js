import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './views/Navigation';
import Project from './views/Project';
import Home from './views/Home';
import Top from './views/Top';
import Sketch from "./views/Sketch";
import Blog from "./views/Blog";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="center-top">
            <div className="bgHolder">
            </div>
            <h2>DAVID BARTHOLOMEW</h2>
            <Navigation></Navigation>
          </div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Project" component={Project}/>
          <Route exact path="/Sketch" component={Sketch} />
          <Route exact path="/Blog" component={Blog} />
        </div>
      </Router>
    );
  }
}

export default App;
