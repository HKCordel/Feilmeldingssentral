import React, { Component } from 'react';
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
            <Link to={'/'}>Feilmeldingssentral Cordel</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
                    <LinkContainer to={'/chart'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Dashboard
              </NavItem>
                    </LinkContainer>

            <LinkContainer to={'/activecases'}>
              <NavItem>
                <Glyphicon glyph='education' /> Active cases
              </NavItem>
            </LinkContainer>
                        <LinkContainer to={'/CustomerErrorCount'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Customer error count
              </NavItem>
                        </LinkContainer>
                    <LinkContainer to={'/stacktraceCount'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Stacktrace antall
              </NavItem>
                    </LinkContainer>
                    
                <LinkContainer to={'/groupedErrors'}>
                    <NavItem>
                        <Glyphicon glyph='th-list' /> Grouped errors
              </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/viewAllErrors'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Feilmeldinger
              </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/errorPrType'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Antall errors pr type
              </NavItem>
                    </LinkContainer>
                    

                  
          </Nav>
            
            <Nav pullRight>
                <LinkContainer to="/register">
                    <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
