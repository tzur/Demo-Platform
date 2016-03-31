import React from 'react';
import AllPositionsContainer from '../../containers/position/AllPositionsContainer.jsx';
import {apply} from '../../../api/client/modules/student'
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
    render(){
        return(
            <div>
                <h1 className="text-center">Hello {this.props.user.username}, Check out those positions:</h1>
                <AllPositionsContainer handleApply={this.handleApply} />
            </div>
        )
    }
}
Student.PropTypes = {user: React.PropTypes.object};