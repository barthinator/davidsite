import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import './css/Home.css'
import AnimateText from "../components/AnimateText"

class Home extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="Home">

        <AnimateText name="test"></AnimateText>
        <h3>Hi I am David. I enjoy creating software, specifically websites and apps.</h3>

        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default Home;
