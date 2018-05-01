import React, { Component } from "react";
import { Jumbotron, Row, Col } from "reactstrap";
import Slider from '../components/Slider'
import SvgTests from '../components/SvgTests.js';

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

        <Jumbotron>
          <h1>David B.</h1>
        </Jumbotron>

        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>

        <SvgTests></SvgTests>

        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default Home;
