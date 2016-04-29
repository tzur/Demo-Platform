import React from 'react';
import {Grid, Col,Row, Button} from 'react-bootstrap';
import {PositionGenericCard} from '../positions/PositionGenericCard.jsx';
import StudentPositionCard from '../positions/StudentPositionCard.jsx';



export default class PositionLayout extends React.Component{
    constructor(props){
        super(props);
        console.log("start up positions");
    }

    handleApply(position, apply){
        this.props.handleApply(position, apply);
    }
    render(){
        let positionCard;
        if (this.props.appliedStudents){
            if (this.props.cardActions){
                positionCard=(position)=>{return (<PositionGenericCard key={position._id} position={position}
                                                                       appliedStudents={this.props.appliedStudents.bind(this,position)}
                                                                       cardActions={this.props.cardActions.bind(this,position)}/>)}
            }else{
                positionCard=(position)=>{return (<PositionGenericCard key={position._id} position={position}
                                                                       appliedStudents={this.props.appliedStudents.bind(this,position)}/>)}
            }
        }else if (this.props.cardActions){

            positionCard = (position)=>{return ( <PositionGenericCard key={position._id} position={position}
                                                         cardActions={this.props.cardActions.bind(this,position)} />)}
        }else{
            positionCard = (position)=>{
                return (<PositionGenericCard key={position._id} position={position}/>)
            }
        }
        return(
            <Grid>
                <Row>
                    {this.props.positions.map(position=>{
                        return positionCard(position);
                    })}
                </Row>
            </Grid>
        )
    }
}
PositionLayout.PropTypes = {positions: React.PropTypes.object, handleApply: React.PropTypes.func};

//TODO maybe divide it to separate components idk.