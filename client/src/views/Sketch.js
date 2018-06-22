import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import P5Wrapper from 'react-p5-wrapper';
import sketch from "./sketch/sketch.js";


class Sketch extends Component {


  	render () {
  		return (
  			<div>
  				<P5Wrapper sketch={sketch}/>
  			</div>
  		);
    }
}

export default Sketch;
