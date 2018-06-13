import React, { Component } from "react";
import Technology from "./Technology";
import "./css/Technology.css";

class TechnologyGroup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animate: false,
      technologies: this.props.technologies,
      isHidden: false
    };
    this.renderGroup = this.renderGroup.bind(this);
    this.shouldRenderGroup = this.shouldRenderGroup.bind(this);
  }

  componentDidMount(){
    this.setState({
      animate: true
    });
  }

  renderGroup(){
    var numRows = this.state.technologies.length;
    var rows = [];
    for (var i = 0; i < numRows; i++){
      rows.push(<Technology key={i} name={this.state.technologies[i]}/>);
    }
    return <div className="technology-group">{rows}</div>;
  }

  shouldRenderGroup(isHidden){
    if(isHidden){
      return <div></div>
    }
    return this.renderGroup();
  }

  render() {


    return (
      <div className="technology-group">
          {this.shouldRenderGroup(this.state.isHidden)}
      </div>
    );
  }
}

export default TechnologyGroup;
