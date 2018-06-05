import React, { Component } from "react";
import ProjectBox from "../components/ProjectBox.js"
import { Row, Col, Container } from "reactstrap";
import "./css/Project.css"

class Project extends Component {

  //Get database information
  render() {


    return (
      <div className="project-container">
        <Row>
          <ProjectBox name="Sidekick" subtitle="Employee Website Contributor" description="Worked on various frontend tasks utilizing the Django framework."></ProjectBox>
          <ProjectBox name="Dvvy"></ProjectBox>
          <ProjectBox name="Shewey"></ProjectBox>
        </Row>
      </div>
    );
  }
}

export default Project;
