import React, { Component } from "react";
import ProjectBox from "../components/ProjectBox.js"
import { Row, Col, Container } from "reactstrap";
import "./css/Project.css"

class Project extends Component {

  //Get database information

  render() {
    return (
      <div>
        <Row>
          <Col>
          <ProjectBox name="Test"></ProjectBox>
          </Col>
          <Col>
          <ProjectBox name="Yes"></ProjectBox>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Project;
