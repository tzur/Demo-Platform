import React from 'react';
import PositionForm from '../startup/PositionForm.jsx';
export default class Startup extends React.Component {

    render(){
        let child;
        if (this.props.children){
            child = React.cloneElement(this.props.children, {user: this.props.user});
        }else{
            child = null;
        }
        return(
            <div>
                <h1 className="text-center">Hello {this.props.user.companyName} Startup!!</h1>
                {child? child : <p className="text-center">Welcome to Tamid interactive pinboard!</p>}
            </div>
        )
    }
}
Startup.PropTypes = {user: React.PropTypes.object};