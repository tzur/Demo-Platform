import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
export default class StudentNavBar extends React.Component {
    render(){
        return(
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Tamid</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/positions">Positions</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#" onClick={this.props.logout}>logout</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
};