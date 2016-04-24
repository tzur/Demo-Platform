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
            <header>
                <h1 className="pull-left" href="#" onClick={this.main.bind(this)}>Tamid</h1>
                <div className="pull-right">
                    <a href="#" onClick={this.login.bind(this)}>Login</a>
                    |
                    <a href="#" onClick={this.signup.bind(this)}>Signup</a>
                </div>
            </header>
        )
    }
};
GuestNavBar.contextTypes = {router: React.PropTypes.object};