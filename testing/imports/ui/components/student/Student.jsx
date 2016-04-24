import React from 'react';
import AllPositionsContainer from '../../containers/position/AllPositionsContainer.jsx';
import {apply} from '../../../api/client/modules/student'
import ApplyModal from '../student/ApplyModal.jsx';
import FlatButton from '../../../../node_modules/material-ui/lib/flat-button';
export default class Student extends React.Component {
    constructor(props){
        super(props);
        this.handleApply = this.handleApply.bind(this);
    }
    handleApply(position, applyText){
        apply(position,applyText,(err, result)=>{
            if (err){
                console.log(err);
            }else{
                console.log("You have been applied!")
            }
        })
    }
    static isApplied(position){
        let retVal = false;
        if (position.appliedUsers){
            position.appliedUsers.forEach((user)=>{
                if (Meteor.userId() === user._id){
                    retVal = true;
                }
            })
        }
        return retVal;
    }
    cardActions(position){
        return (
            Student.isApplied(position)?
                <FlatButton label="You applied to this position" disabled={true} />
                :
                <ApplyModal  position={position} onSubmit={this.handleApply}/>
        )
    }
    render(){
        return(
            <div>
                <h1 className="text-center">Hello {this.props.user.username}, Check out those positions:</h1>
                <AllPositionsContainer handleApply={this.handleApply} cardActions={this.cardActions.bind(this)}/>
            </div>
        )
    }
}
Student.PropTypes = {user: React.PropTypes.object};