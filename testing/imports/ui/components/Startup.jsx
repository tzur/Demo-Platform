import React from 'react';
import PositionForm from '../components/PositionForm.jsx';
export default class Startup extends React.Component {
    render(){
        return(
            <div>
                <h1 className="text-center">Hello {this.props.startup.companyName}</h1>
                <PositionForm startup={this.props.startup}/>
            </div>
        )
    }
}
Startup.PropTypes = {startup: React.PropTypes.object};