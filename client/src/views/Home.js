import React, { Component } from "react";
import './css/Home.css'
import Transition from 'react-transition-group/Transition';
import AnimationButton from '../components/AnimationButton';
import { Link } from 'react-router-dom';
import { Row, Col, Container, NavLink } from "reactstrap";
import {  BgContainer,
  PageTitleContainer,
  PageTitleSpan1,
  AnimationContainer,
  AnimeText,
  AnimeButton,
  PageTitleP1} from './css/StyledComponents';
import Anime from "animejs";

const AnimateElement = (target, animate) => {
    Anime.remove(target); // Stop and remove this element from current animation if present...
    // bool ? this : that (if true this else that)
    let targetParent = target.parentNode;
    let animation = Anime({
      targets: target,
      duration: 1500,
		  delay: function(el, index) {
			  return 250+index*40;
		  },
		  easing: 'easeOutExpo',
		  opacity: 1,
		  translateY: ['50%','0%']
    });
  };

class Home extends Component {
  state = { users: [] }

  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }

  componentDidMount(){
    this.setState({
      animate: !this.state.animate
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      animate: false
    };
    this.setOrReset = this.setOrReset.bind(this);
  }
  setOrReset(e) {
    this.setState({
      animate: !this.state.animate
    });
  }

  render() {

    return (
      <div className="Home">

      <Row>

      <Col sm="4">
        <div className="profile">
        </div>
        <NavLink href="https://www.linkedin.com/in/davidbartholomewr/"><div className="linkedin-icon"></div></NavLink>
      </Col>
      <Col sm="8">
      <Transition
        in={this.state.animate}
        duration={1000}
        timeout={500}
        onEnter={() => { AnimateElement(this.AnimeText, this.state.animate) }}
        onExit={() => { AnimateElement(this.AnimeText, this.state.animate) }}>
          <AnimationContainer>
            <AnimeText
              id="anime-element"
              innerRef={node => {
                this.AnimeText = node;
              }}
            ><NavLink className="home" href="https://github.com/barthinator">DAVID BARTHOLOMEW</NavLink> IS A WEB AND APP DEVELOPER BASED IN CALIFORNIA.</AnimeText>
          </AnimationContainer>
        </Transition>
        </Col>

        </Row>

      </div>
    );
  }
}

export default Home;
