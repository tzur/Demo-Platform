import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
export default class GuestNavBar extends React.Component {
    login(){
        this.context.router.push('/login');
    }
    signup(){
        this.context.router.push('/signup');
    }
    main(){
        this.context.router.push('/');
    }
    render(){
        return(
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#" onClick={this.main.bind(this)}>Tamid</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#" onClick={this.login.bind(this)}>Login</NavItem>
                        <NavItem eventKey={2} href="#" onClick={this.signup.bind(this)}>Signup</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
};
GuestNavBar.contextTypes = {router: React.PropTypes.object};