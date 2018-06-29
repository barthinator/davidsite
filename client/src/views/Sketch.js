import React, { Component } from "react";
import { Row, Col, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button  } from "reactstrap";
import P5Wrapper from '../react-p5-wrapper/P5Wrapper.js';
import "./css/Sketch.css";
import sketch from './sketch/sketch';
import background from './sketch/live-background.js';


class Sketch extends Component {

  	constructor(props) {
		super(props);
		this.state = {
			rotation: 150,
			stateSketch: background,
      dropdownOpen: false
		};
    this.toggle = this.toggle.bind(this);
    this.rotationChange = this.rotationChange.bind(this);
	}

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

	rotationChange(e){
		this.setState({rotation:e.target.value});
	}

	pressEvent(){
		this.state.stateSketch === sketch ? this.setState({stateSketch:sketch2}) : this.setState({stateSketch:sketch});
	}

  selectSketch(id){
    if (id == "barns"){
      this.setState({
        stateSketch: sketch
      });
    }
    if (id == "purple"){
      this.setState({
        stateSketch: background
      });
    }
  }

	render () {
		return (
			<div>
				<P5Wrapper sketch={this.state.stateSketch} rotation={this.state.rotation}/>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Select Sketch</DropdownItem>
          <DropdownItem onClick={this.selectSketch.bind(this, "barns")}>Barnsley Fern</DropdownItem>
          <DropdownItem onClick={this.selectSketch.bind(this, "purple")}>Purple Rain Background</DropdownItem>
        </DropdownMenu>
      </Dropdown>
			</div>
		);
	}
}

export default Sketch;
