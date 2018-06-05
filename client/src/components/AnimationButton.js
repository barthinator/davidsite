import React, { Component } from "react";
import PropTypes from 'prop-types';
import { AnimeButton } from "../views/css/StyledComponents";

const ButtonPressedStyle = {
  transform: "scale(0.8)"
};

const SpanWrapperStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
}

export default class AnimationButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonPressed: false,
      animate: true
    };
    this.handlePressed = this.handlePressed.bind(this);
  }
  handlePressed() {
    this.props.handleClick();

    this.setState({
      buttonPressed: !this.state.buttonPressed,
      animate: !this.state.animate
    });

    window.setTimeout(() => {
      this.setState({
        buttonPressed: !this.state.buttonPressed
      });
    }, 50);

  }

  render() {
    return (
      <span>
        <AnimeButton
          href="#"
          onClick={this.handlePressed}
        >
          {this.state.animate ? "Animate" : "Return"}
        </AnimeButton>
      </span>
    );
  }
}

AnimationButton.propTypes = {
    handleClick: PropTypes.func
}
