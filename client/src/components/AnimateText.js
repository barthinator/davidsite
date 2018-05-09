import React, {Component} from 'react';


class AnimateText extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      isClicked: false,
    };
  }

  handleClick() {
    this.setState({isClicked: true});
    this.setState({name: "Lmao nice click"});
    console.log(this.state)
  }

  render () {
    return (
      <div className="AnimateText" onClick={() => this.handleClick()}>
        {this.state.name}
      </div>
    )
  }
}

export default AnimateText
