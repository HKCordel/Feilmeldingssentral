﻿import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>reactapplication1</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Dashboard
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/activecases'}>
              <NavItem>
                <Glyphicon glyph='education' /> Active cases
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/fetchdata'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Oversikt
              </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/login'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Login
              </NavItem>
                    </LinkContainer>
                                        
                <LinkContainer to={'/Register'}>
                    <NavItem>
                        <Glyphicon glyph='th-list' /> Register
              </NavItem>
                    </LinkContainer>
                        <LinkContainer to={'/CustomerErrorCount'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Customer error count
              </NavItem>
                        </LinkContainer>

                    <LinkContainer to={'/Swagger'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Swaggertest
              </NavItem>
                    </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
