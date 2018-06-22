import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Transition from 'react-transition-group/Transition';
import AnimationButton from '../components/AnimationButton';
import {  BgContainer,
  AnimationContainer,
  AnimeText,
  AnimeElement } from '../views/css/StyledComponents';
import Anime from "animejs";
import './css/ProjectBox.css';
import TechnologyGroup from "./TechnologyGroup";

const AnimateElement = (target, animate) => {
    Anime.remove(target); // Stop and remove this element from current animation if present...
    // bool ? this : that (if true this else that)
    let targetParent = target.parentNode;
    if (animate == false){
      let animation = Anime({
        targets: target,
        easing: 'easeOutExpo',
        opacity: 1
      });
    }
    else{
      let animation = Anime({
        targets: target,
  		  easing: 'easeOutExpo',
  		  opacity: 1
      });
    }
  };

class ProjectBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      subtitle: this.props.subtitle,
      description: this.props.description,
      animate: false,
      showDetails: false,
      technologies: this.props.technologies
    };
    this.renderBody = this.renderBody.bind(this);
  }

  onMouseEnter(){
    //Trigger animation
    this.setState({
      animate: true,
      showDetails: true
    });
  }

  onMouseLeave(){
    this.setState({
      animate: false,
      showDetails: false
    });
  }

  renderBody(showDetails){
    if(showDetails){
      return (
        <div>
        <CardTitle>Technologies</CardTitle>
        <TechnologyGroup technologies={this.state.technologies}/>
        </div>
      )
    }
    else{
      return (
        <div>
        <CardTitle>{this.state.name}</CardTitle>
        <CardSubtitle>{this.state.subtitle}</CardSubtitle>
        <CardText>{this.state.description}</CardText>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="project-box">
        <Transition
          in={this.state.animate}
          duration={1000}
          timeout={500}
          onEnter={() => { AnimateElement(this.AnimeElement, this.state.animate) }}
          onExit={() => { AnimateElement(this.AnimeElement, this.state.animate)  }}>
          <AnimationContainer>
            <Card>
              <CardImg top src={require("../img/" + this.state.name.replace(/\s/g, '') + ".png")} alt="Card image cap" />
                <AnimeElement
                  id="anime-element"
                  innerRef={node => {
                    this.AnimeElement = node;
                  }}>
                  <CardBody onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}>
                    {this.renderBody(this.state.showDetails)}
                  </CardBody>
                </AnimeElement>
            </Card>
          </AnimationContainer>
        </Transition>
      </div>
    );
  }
}

export default ProjectBox;
