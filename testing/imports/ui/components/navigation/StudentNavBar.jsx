import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
export default class StudentNavBar extends React.Component {
    toAppliedPositions(){
        this.context.router.push('/appliedPositions')
    }
    toAvailablePositions(){
        this.context.router.push('/');
    }
    render(){
        return(
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#" onClick={this.toAvailablePositions.bind(this)}>Tamid - Student</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={2} onClick={this.toAvailablePositions.bind(this)}>Available Positions</NavItem>
                        <NavItem eventKey={1} onClick={this.toAppliedPositions.bind(this)}>Applied Positions</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} onClick={this.props.logout}>logout</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
};
StudentNavBar.contextTypes = {router: React.PropTypes.object};