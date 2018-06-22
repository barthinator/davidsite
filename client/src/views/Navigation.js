import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './css/Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    return (
      <Navbar expand="xs" className="nav">
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="mx-auto test" navbar>
          <NavItem>
            <NavLink className="navLink" tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navLink" tag={Link} to="/Project">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navLink github" href="https://github.com/barthinator">GitHub</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
