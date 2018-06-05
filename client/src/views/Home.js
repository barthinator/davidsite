import React, { Component } from "react";
import './css/Home.css'

class Home extends Component {
  state = { users: [] }

  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }

  // <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>
  //   <h3>Hi, my name is David.</h3>
  //     <p>I enjoy creating things, especially software</p>
  // </Anime>

  render() {
    return (
      <div className="Home">

        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default Home;
