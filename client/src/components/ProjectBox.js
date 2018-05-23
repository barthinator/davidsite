import React, { Component } from "react";

class ProjectBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: this.props.name
    }
  }

  render() {
    return (
      <div className="project-box">
        <div className="project-image">
          <img width="100px" height="100px" src="https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG"></img>
        </div>
        <div className="project-body">
          <div className="project-header">
            <h2>{this.state.name}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectBox;
