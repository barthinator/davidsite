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
          <ProjectBox name="Sidekick" subtitle="Employee Code Contributor" description="Worked on various frontend tasks utilizing the Django framework." technologies={["Python", "Django", "Postgres", "HTML", "CSS", "Git"]}></ProjectBox>
          <ProjectBox name="Dvvy" subtitle="Lead Software Engineer" description="Led a team of 6, through our Senior Design class, in the process of creating a social media iOS app." technologies={["Swift", "Git", "Cocoapods"]}></ProjectBox>
          <ProjectBox name="Shewey" subtitle="Website Redesign" description="Redesigned and restructured company website utilizing newer React technologies." technologies={["React", "HTML", "CSS"]}></ProjectBox>
          <ProjectBox name="Hungry Cougar" subtitle="APU Meal Plan Manager" description="Developed an HTML data retriever that allowed the main functionality of the app." technologies={["Swift", "Javascript"]}></ProjectBox>
          <ProjectBox name="Humans vs. Zombies" subtitle="University Wide Game" description="Redesigned frontend of APU HVZ website, assisted in server and SQL issues too." technologies={["PHP", "HTML", "CSS", "SQL"]}></ProjectBox>
        </Row>
      </div>
    );
  }
}

export default Project;
