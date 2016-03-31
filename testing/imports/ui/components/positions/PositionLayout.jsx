import React from 'react';
import {Grid, Col,Row, Button} from 'react-bootstrap';
import {PositionGenericCard} from '../positions/PositionGenericCard.jsx';
import StudentPositionCard from '../positions/StudentPositionCard.jsx';
import FlatButton from '../../../../node_modules/material-ui/lib/flat-button';
import {StudentCard} from '../student/StudentCard.jsx';
import ApplyModal from '../student/ApplyModal.jsx';
export default class PositionLayout extends React.Component{
    constructor(props){
        super(props);
        console.log("start up positions");
    }
    isApplied(position){
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
    handleApply(position, apply){
        this.props.handleApply(position, apply);
    }
    render(){
        let positionCard;
        if (this.props.startupMode){
            let getStudents= (position)=>{
                if (position.appliedUsers){
                   return position.appliedUsers.map((user)=>{
                        return(
                            <StudentCard key={user._id} user={user} />
                        )
                    })
                }else{
                    return <p>No one has applied yet.</p>
                }
            };
            positionCard=(position)=>{return (<PositionGenericCard key={position._id} position={position}
                                                                    appliedStudents={getStudents.bind(this,position)}/>)}
        }else{
            let cardActions = (position)=>{
                return (
                    this.isApplied(position)?
                        <FlatButton label="You applied to this position" disabled={true} />
                        :
                        <ApplyModal position={position} onSubmit={this.handleApply.bind(this)}/>
                )
            };
            positionCard = (position)=>{return ( <PositionGenericCard key={position._id} position={position}
                                                                     cardActions={cardActions.bind(this,position)} />)}
        }
        return(
            <Grid>
                <Row>
                    {this.props.positions.map(position=>{
                        return positionCard(position)
                    })}
                </Row>
            </Grid>
        )
    }
}
PositionLayout.PropTypes = {positions: React.PropTypes.object, handleApply: React.PropTypes.func};

//TODO maybe divide it to separate components idk.