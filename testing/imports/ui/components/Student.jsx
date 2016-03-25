import React from 'react';

export default class Student extends React.Component {
    render(){
        return(
            <div>
                <h1 className="text-center">Hello {this.props.student.username}</h1>
            </div>
        )
    }
}
Student.PropTypes = {student: React.PropTypes.object};