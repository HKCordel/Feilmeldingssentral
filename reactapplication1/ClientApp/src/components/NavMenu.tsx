import React, { Component } from "react";
import { Glyphicon, Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

export class NavMenu extends Component {
    public render() {
        return (
            <Navbar inverse fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={"/"}>Feilmeldingssentral Cordel</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={"/chart"}>
                            <NavItem>
                                <Glyphicon glyph="stats" /> Dashboard
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={"/activecases"}>
                            <NavItem>
                                <Glyphicon glyph="th-list" /> Active cases
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={"/CustomerErrorCount"}>
                            <NavItem>
                                <Glyphicon glyph="th-list" /> Customer error count
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={"/stacktraceCount"}>
                            <NavItem>
                                <Glyphicon glyph="th-list" /> Stacktrace count
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={"/groupedErrors"}>
                            <NavItem>
                                <Glyphicon glyph="th-list" /> Grouped errors
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={"/viewAllErrors"}>
                            <NavItem>
                                <Glyphicon glyph="th-list" /> Error messages
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={"/errorPrType"}>
                            <NavItem>
                                <Glyphicon glyph="th-list" />  Errors for each type
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
