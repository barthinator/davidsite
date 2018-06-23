import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import P5Wrapper from '../react-p5-wrapper/P5Wrapper.js';
import sketch from './sketch/sketch';
import sketch2 from './sketch/sketch2';


class Sketch extends Component {

  	constructor(props) {
		super(props);
		this.state = {
			rotation: 150,
			stateSketch: sketch,
		};
    this.rotationChange = this.rotationChange.bind(this);
	}

	rotationChange(e){
		this.setState({rotation:e.target.value});
	}

	pressEvent(){
		this.state.stateSketch === sketch ? this.setState({stateSketch:sketch2}) : this.setState({stateSketch:sketch});
	}

	render () {
		return (
			<div>
				<P5Wrapper sketch={this.state.stateSketch} rotation={this.state.rotation}/>
				<input type="range" value={this.state.rotation}  min="0"  max="360" step="1" onChange={this.rotationChange}/>
				<button onClick={this.pressEvent.bind(this)}>Change Sketch</button>
			</div>
		);
	}
}

export default Sketch;
