import React from 'react';
import Anime from 'react-anime';

class Anime extends React.Component {

  constructor(props) {
    super(props);
    this.targets = [];
  }

  componentDidMount() {

    let animeProps = Object.assign({}, this.props, {
      targets: this.targets
  });

    delete animeProps.children;

this.anime = anime(animeProps);
  }

  shouldComponentUpdate(nextProps) {
    this.anime = anime(Object.assign({}, {targets: this.targets}, nextProps));

    return true;
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

class App extends React.Component {
  public state = {
    clicked: 0
  }

  increment = () => {
    this.setState((prevState, currProps) => ({clicked: prevState.clicked + 1}))
  }

  render() {
    let yo = (this.state.clicked % 2) === 0;
    return <div>{yo ? (
      <Anime easing="easeOutElastic"
           loop={false}
           autoplay={true}
           duration={1000}
           delay={(el, index) => index * 240}
           translateX="13rem"
           scale={[.75, .9]}>
        <div className="blue" />
      </Anime>
    ) :  <Anime easing="easeOutElastic"
           loop={false}
           autoplay={true}
           duration={1000}
           delay={(el, index) => index * 240}
           translateX={yo ? "13rem" : "0rem"}
           scale={[.75, .9]}>
       <div className="green"  />
    </Anime>
  }
  <a style={{display: 'block', width: 240}}onClick={this.increment}>Trigger</a>
</div>
  }
}

let node = document.getElementById('Top');

ReactDOM.render(<App/>, node);
