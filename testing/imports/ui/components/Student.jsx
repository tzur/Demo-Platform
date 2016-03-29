import React from 'react';
import AllPositionsContainer from '../containers/position/AllPositionsContainer.jsx';
export default class Student extends React.Component {
    render(){
        return(
            <div>
                <h1 className="text-center">Hello {this.props.user.username}, Check out those positions:</h1>
                <AllPositionsContainer />
            </div>
        )
    }
}
Student.PropTypes = {user: React.PropTypes.object};