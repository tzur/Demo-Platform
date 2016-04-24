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
            <header>
                <h1 className="pull-left" href="#" onClick={this.main.bind(this)}>Tamid - Startup</h1>
                <div className="pull-right">
                    <a  href="#" onClick={this.props.logout}>logout</a>
                </div>
            </header>
        )
    }
};
StartupNavBar.contextTypes = {router: React.PropTypes.object};
//<Nav>
//    <NavItem eventKey={1} href="#" onClick={this.positions.bind(this)}>Your Positions</NavItem>
//    <NavItem eventKey={2} href="#" onClick={this.newPosition.bind(this)}>New Position</NavItem>
//</Nav>