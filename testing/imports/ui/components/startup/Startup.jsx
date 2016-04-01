import React from 'react';
import PositionForm from '../positions/PositionForm.jsx';
import StartupPositionsContainer from '../../containers/position/StartupPositionContainer.jsx';
import FlatButton from 'material-ui/lib/flat-button';
import StudentCard from '../student/StudentCard.jsx';
export default class Startup extends React.Component {
    constructor(props){
        super(props);
    }

    appliedStudents(position){
        if (position.appliedUsers){
            return position.appliedUsers.map((user)=>{
                return(
                    <StudentCard key={user._id} user={user} />
                )
            })
        }else{
            return <p>No one has applied yet.</p>
        }
    }
    render(){
        return(
            <div>
                <h1 className="text-center">Hello {this.props.user.companyName} Startup!!</h1>

                <PositionForm startup={this.props.user}/>
                <StartupPositionsContainer startup={this.props.user} appliedStudents={this.appliedStudents}/>
            </div>
        )
    }
}
Startup.PropTypes = {user: React.PropTypes.object};