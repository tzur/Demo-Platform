import React from 'react';
import {Grid, Col,Row, Button} from 'react-bootstrap';
import Position from '../startup/Position.jsx';
export default class StartupPositions extends React.Component{
    constructor(props){
        super(props);
        console.log("start up positions");
    }
    render(){
        return(
            <Grid>
                <Row>
                    <Col md={4}  className="text-center">
                        {this.props.startup.companyName} Positions board:
                    </Col>
                </Row>
                <Row>
                {this.props.positions.map(position=>{
                    return(
                        <Position key={position._id} position={position}/>
                    )
                })}
                </Row>
            </Grid>
        )
    }
}
StartupPositions.PropTypes = {startup: React.PropTypes.object, positions: React.PropTypes.array};