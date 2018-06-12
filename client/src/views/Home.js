import React, { Component } from "react";
import './css/Home.css'
import Transition from 'react-transition-group/Transition';
import AnimationButton from '../components/AnimationButton';
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

  // <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>
  //   <h3>Hi, my name is David.</h3>
  //     <p>I enjoy creating things, especially software</p>
  // </Anime>

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
          >Sometimes the best design, is the simplest</AnimeText>
        </AnimationContainer>
      </Transition>


      </div>
    );
  }
}

export default Home;
