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
            <header>
                <h1 className="pull-left" href="#" onClick={this.toAvailablePositions.bind(this)}>Tamid - Student</h1>
                <div className="pull-right">
                    <a  onClick={this.toAvailablePositions.bind(this)}>Available Positions</a>
                    |
                    <a  onClick={this.toAppliedPositions.bind(this)}>Applied Positions</a>
                    |
                    <a  onClick={this.props.logout}>logout</a>
                </div>
            </header>
        )
    }
};
StudentNavBar.contextTypes = {router: React.PropTypes.object};