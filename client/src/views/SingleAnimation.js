import React, { Component } from "react";
import Anime from "animejs";
import ReactDOM from "react-dom";
import Transition from 'react-transition-group/Transition';
import AnimationButton from '../components/AnimationButton';
import {  BgContainer,
  PageTitleContainer,
  PageTitleSpan1,
  AnimationContainer,
  AnimeElement,
  AnimeButton,
  PageTitleP1} from './css/StyledComponents';

const AnimateElement = (target, animate) => {
  console.log("Animate stuff")
  Anime.remove(target); // Stop and remove this element from current animation if present...
  // bool ? this : that (if true this else that)
  let targetParent = target.parentNode;
  let animation = Anime({
    targets: target,
    opacity: animate ? .5 : 1,
    backgroundColor: animate ? '#000' : '#FFF',
    borderRadius: animate ? ['0em', '2em'] : ['2em', '0em'],
    easing: 'easeInOutQuad',
    translateX: animate ? 250 : 0,
    scale: animate ? 2 : 1,
    rotate: animate ? 360 : 0
  });
};

const ButtonPressedStyle = {
  transform: 'scale(0.8)'
}

export default class SingleAnimation extends Component {
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

  // componentDidUpdate(prevProps, prevState) {
  //   AnimateElement(this.AnimeElement, this.state.animate); //Run the animate Function
  // }
  render() {
    return (
      <div>
          <PageTitleP1>Simplicity</PageTitleP1>
          <Transition
            in={this.state.animate}
            duration={200}
            timeout={500}
            onEnter={() => { AnimateElement(this.AnimeElement, this.state.animate) }}
            onExit={() => { AnimateElement(this.AnimeElement, this.state.animate) }}>
            <AnimationContainer>
              <AnimeElement
                id="anime-element"
                innerRef={node => {
                  this.AnimeElement = node;
                }}
              />
              <AnimationButton handleClick={this.setOrReset} />
            </AnimationContainer>
          </Transition>
      </div>
    );
  }
}
