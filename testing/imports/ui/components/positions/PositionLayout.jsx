import React from 'react';
import {Grid, Col,Row, Button} from 'react-bootstrap';
import Position from '../positions/Position.jsx';
export default class PositionLayout extends React.Component{
    constructor(props){
        super(props);
        console.log("start up positions");
    }
    render(){
        return(
            <Grid>
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
PositionLayout.PropTypes = {positions: React.PropTypes.object};