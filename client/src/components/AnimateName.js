import ReactDOM from 'react-dom';
import React from 'react';
import Anime from 'react-anime';
import "./css/AnimateName.css";

class AnimateName extends React.Component {

  constructor(props) {
    super(props);
    this.targets = [];
  }

  componentDidMount() {

    let animeProps = Object.assign({targets: this.targets}, this.props);

    delete animeProps.children;

    this.anime = anime(animeProps);

  }

addTarget = (newTarget) => {
  this.targets = [...this.targets, newTarget];
}

render() {
  let children = [];
  if (this.props.children) {
    if (Array.isArray(this.props.children))
      children = this.props.children;
    else
      children = [this.props.children];
  }

  return (
    <g>
      {children.map((child, i) => (React.cloneElement(child, { key: i, ref: this.addTarget })))}
    </g>
  );
  }
}


let App = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 1280 720">
     <Anime easing="easeOutQuad"
           duration={1500}
           loop={true}
           delay={(el, index) => index * 200}
           strokeDashoffset={ (el) => {
                  var pathLength = 0;
                if (el.getTotalLength) {
                  pathLength = el.getTotalLength();
                  el.setAttribute('stroke-dasharray', pathLength);
                            }
              return [pathLength, 0];
              }}>
              <path class="st1" d="M45.5,115.7v-97c0,0,59-9.3,60.7,42.3C108,118.7,21,99.7,21,99.7"/>
              <path class="st1" d="M378.7,115.7"/>
              <path class="st1" d="M148.5,103.5"/>
              <path class="st1" d="M148.5,68.7"/>
              <path class="st1" d="M133.3,52.7"/>
              <path class="st1" d="M148.5,101.9"/>
              <path class="st1" d="M119.5,79.5"/>
              <path class="st1" d="M148.5,79.3"/>
              <path class="st1" d="M122.1,11.3c0,0,57.3,39.6,58,104.3c0,0,5.3-65.3,45.3-104.3"/>
              <line class="st1" x1="212.7" y1="54.2" x2="212.7" y2="104.1"/>
              <path class="st1" d="M120.3,48.4c0,0,31-10.3,31,31.3s-37.3,23.8-34.1,5c3.5-20.4,21.5-11.4,20.8-1.7"/>
      </Anime>
    </svg>
);

let node = document.getElementById('Top');

ReactDOM.render(<App/>, node);
