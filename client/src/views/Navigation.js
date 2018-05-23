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
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle className="dropdown" nav caret>
              Portfolio
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Beam Forming
              </DropdownItem>
              <DropdownItem>
                Project Dvvy
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Resume
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
