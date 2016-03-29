import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
export default class StartupNavBar extends React.Component {
    positions(){
        this.context.router.push('/positions');
    }
    newPosition(){
        this.context.router.push('/newPosition');
    }
    main(){
        this.context.router.push('/');
    }
    render(){
        return(
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#" onClick={this.main.bind(this)}>Tamid - Startup</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={3} href="#" onClick={this.props.logout}>Logout</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
};
StartupNavBar.contextTypes = {router: React.PropTypes.object};
//<Nav>
//    <NavItem eventKey={1} href="#" onClick={this.positions.bind(this)}>Your Positions</NavItem>
//    <NavItem eventKey={2} href="#" onClick={this.newPosition.bind(this)}>New Position</NavItem>
//</Nav>