import React from 'react';
import PositionForm from '../positions/PositionForm.jsx';
import StartupPositionsContainer from '../../containers/position/StartupPositionContainer.jsx';
import FlatButton from 'material-ui/lib/flat-button';
export default class Startup extends React.Component {
    constructor(props){
        super(props);
        this.handleApply= this.handleApply.bind(this);
    }
    handleApply(){
        console.log("You are so funny...how can startup apply to startup?!");
    }
    render(){
        return(
            <div>
                <h1 className="text-center">Hello {this.props.user.companyName} Startup!!</h1>

                <PositionForm startup={this.props.user}/>
                <StartupPositionsContainer startup={this.props.user} />
            </div>
        )
    }
}
Startup.PropTypes = {user: React.PropTypes.object};