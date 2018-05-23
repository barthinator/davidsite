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
                <path className="st1" d="M992,496H256V288h736V496z"/>
	              <path className="st1" d="M992,288h208v208H992 M1024,384l32,64l32-64 M1168,448l-32-32h16c0,0,16,0,16-16s-16-16-16-16h-32v64"/>
                <path className="st1" d="M992,496H256V288h736V496z"/>
                <path className="st1" d="M640,448c0,0,0-36,0-44s8-20,20-20c8,0,31,0,31,0"/>
                <path className="st1" d="M304,496V322c0,0,3.9-6,27-6c28,0,41,12,41,28c0,22-36,28-45,28c-12,0,57,0,57,40c0,12.2-3,35-32,36s-96,0-96,0"/>
                <path className="st1" d="M426,448v-64"/>
                <path className="st1" d="M464,416a32,32 0 1,0 64,0a32,32 0 1,0 -64,0"/>
                <path className="st1" d="M560,344c0,28,0,104,0,104c32,0,48-4,48-24s-24-20-48-20"/>
                <path className="st1" d="M714,396c0,0,8-12,24-12s21.9,5.6,24,12c4,12-2.3,45.7,4,52c2.2,2.2-0.4-0.4-3.2-3.2c-2.5-2.5-6.5-3.1-9.6-1.2c-3.5,2.1-8.8,4.4-15.2,4.4c-12,0-24-4-24-16s8-20,24-20s25,4,25,4"/>
                <path className="st1" d="M854.8,384h-23.3c-20.2,0-37.1,11.8-36.7,32c0.4,19.5,16.4,32,36,32h24"/>
                <path className="st1" d="M938.5,432c-5.5,9.6-15.9,16-27.7,16c-17.7,0-32-14.3-32-32s14.3-32,32-32c17.7,0,32,14.3,32,32h-44"/>
      </Anime>
    </svg>
);

let node = document.getElementById('Top');

ReactDOM.render(<App/>, node);
