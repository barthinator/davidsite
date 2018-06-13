import React, { Component } from "react";
import ProjectBox from "../components/ProjectBox.js"
import { Row, Col, Container } from "reactstrap";
import "./css/Technology.css";

var colorCodes = {
  React: "#2CCCE4",
  Python: "#F47373",
  Swift: "#DCE775",
  Javascript: "#BA68C8",
  HTML: "#555555",
  CSS: "#D9E3F0",
  PHP: "#7BDCB5",
  SQL: "#455a64",
  Bootstrap: "#fff176",
  Cocoapods: "#e27300",
  Git: "black",
  Postgres: "#800000",
  Django: "#808000"
}

class Technology extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      color: colorCodes[this.props.name]
    };
  }

  render() {
    return (
      <div style={{backgroundColor:this.state.color}} className="technology">
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default Technology;
