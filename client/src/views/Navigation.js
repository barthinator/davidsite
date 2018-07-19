import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <Navbar expand="xs">
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="mx-auto test" navbar>
          <NavItem>
            <NavLink className="navLink" tag={Link} to="/">HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navLink" tag={Link} to="/Project">PROJECTS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navLink" tag={Link} to="/Blog">BLOG</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navLink github" href="https://github.com/barthinator">GITHUB</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
