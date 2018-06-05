import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class ProjectBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      subtitle: this.props.subtitle,
      description: this.props.description
    }
  }

  render() {
    return (
      <div>
        <Card>
          <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.state.name}</CardTitle>
            <CardSubtitle>{this.state.subtitle}</CardSubtitle>
            <CardText>{this.state.description}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ProjectBox;
