import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
export default class StartupNavBar extends React.Component {
    positions(){
        this.context.router.push('/startups/'+ Meteor.userId() + '/positions');
    }
    newPosition(){
        this.context.router.push('/startups/'+ Meteor.userId() + '/newPosition');
    }
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
                        <NavItem eventKey={1} href="#" onClick={this.positions.bind(this)}>Your Positions</NavItem>
                        <NavItem eventKey={1} href="#" onClick={this.newPosition.bind(this)}>New Position</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#" onClick={this.props.logout}>Logout</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
};
StartupNavBar.contextTypes = {router: React.PropTypes.object};