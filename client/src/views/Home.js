import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import Slider from '../components/Slider'
import SvgTests from '../components/SvgTests.js';
import './css/Home.css'

class Home extends Component {
  state = { users: [] }

  /* To fetch the users from our express server
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  */

  render() {
    return (
      <div className="Home">

        <h3>Hi I am David. I enjoy creating software, specifically websites and apps.</h3>

        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default Home;
