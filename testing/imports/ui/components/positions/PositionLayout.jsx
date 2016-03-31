import React from 'react';
import {Grid, Col,Row, Button} from 'react-bootstrap';
import PositionGenericCard from '../positions/PositionGenericCard.jsx';
import StudentPositionCard from '../positions/StudentPositionCard.jsx';
export default class PositionLayout extends React.Component{
    constructor(props){
        super(props);
        console.log("start up positions");
    }
    render(){
        let positionCard;
        if (this.props.startupMode){
            positionCard=(position)=>{return (<PositionGenericCard key={position._id} position={position} />)}
        }else{
            positionCard= (position)=>{return ( <StudentPositionCard key={position._id} position={position} handleApply={this.props.handleApply} />)}
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