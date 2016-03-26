import React from 'react';

export default class Student extends React.Component {
    render(){
        return(
            <div>
                <h1 className="text-center">Hello {this.props.user.username} Student!</h1>
            </div>
        )
    }
}
Student.PropTypes = {user: React.PropTypes.object};