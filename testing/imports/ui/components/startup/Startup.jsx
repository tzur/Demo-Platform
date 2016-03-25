import React from 'react';
import PositionForm from '../startup/PositionForm.jsx';
export default class Startup extends React.Component {

    render(){
        let child;
        if (this.props.children){
            child = React.cloneElement(this.props.children, {startup: this.props.startup});
        }else{
            child = null;
        }
        return(
            <div>
                <h1 className="text-center">Hello {this.props.startup.companyName}</h1>
                {child? child : <p>You have no positions, go Ahead and add one!</p>}
            </div>
        )
    }
}
Startup.PropTypes = {startup: React.PropTypes.object};