import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import './css/Home.css'
import Anime from 'react-anime';
import AnimateName from '../components/AnimateName.js';

class Home extends Component {
  state = { users: [] }

  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }

  render() {
    return (
      <div className="Home">

        <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>
          <h3>Hi, my name is David.</h3>
          <section>
            <p>I enjoy creating things, especially software</p>
          </section>
        </Anime>

        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default Home;
