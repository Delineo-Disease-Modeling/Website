import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Logo from "./../images/delineo_vector_2.0.1.png"

// Move css here

const Header = () => {

  const [navState, setNavState] = useState({
    isNavOpen: false,
    isModalOpen: false
  });

  const toggleNav = () => {
    setNavState({
      isNavOpen: !navState.isNavOpen,
    });
  };

  // const toggleModal = () => {
  //   setNavState({
  //     isModalOpen: !navState.isModalOpen,
  //   });
  // };

  const styleSheet = {
    color: "white"
  };

  const active = {
    color: '#66FCF1',
    borderBottom: '1px solid #66FCF1',
    paddingBottom: '4px',

  };

  return (
    <Navbar expand="md" className="color navbar-dark">
      <div className="container">
        <NavbarBrand className="mr-auto" href="/">
          <img src={Logo} alt="Logo" width="200" height="65"></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNav} />
        <Collapse isOpen={navState.isNavOpen} navbar>
          <Nav navbar className="ms-auto">
            <NavItem>
              <NavLink className="Nav-link" to='/simulator' activeClassName='active' activeStyle={active} style={styleSheet}>Simulator</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Nav-link" to='/about' activeClassName='active' activeStyle={active} style={styleSheet}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Nav-link" to='/team' activeClassName='active' activeStyle={active} style={styleSheet}>Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Nav-link" to='/developmentblog' activeClassName='active' activeStyle={active} style={styleSheet}>Development Blog</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
