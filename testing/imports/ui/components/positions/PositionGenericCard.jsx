import React from 'react';
import {Col,Row,Grid} from 'react-bootstrap';
import Card from '../../../../node_modules/material-ui/lib/card/card';
import CardActions from '../../../../node_modules/material-ui/lib/card/card-actions';
import CardHeader from '../../../../node_modules/material-ui/lib/card/card-header';
import CardMedia from '../../../../node_modules/material-ui/lib/card/card-media';
import CardTitle from '../../../../node_modules/material-ui/lib/card/card-title';
import FlatButton from '../../../../node_modules/material-ui/lib/flat-button';
import CardText from '../../../../node_modules/material-ui/lib/card/card-text';
import {positionConstantToPosition} from '../../../api/client/modules/langauage'
export  function PositionGenericCard(props){

    if (props.position === undefined){
        console.error("No position was given to position generic card ")
    }
    const mailAddress = "mailto:"+ props.position.email;
    return(
        <Col md={10} sm={10}>
            <Card style={{backgroundColor: '#F9F9FD' , marginTop: '10px'}}>
                <CardTitle title={props.position.companyName}/>
                <CardText>
                    <h4 className="cardTitle">Position</h4>
                    <p className="cardText">{props.position.jobTitle}, {positionConstantToPosition(props.position.position)}</p>
                    <h4 className="cardTitle">Description</h4>
                    <p className="cardText"> {props.position.description}</p>
                    {props.appliedStudents?
                        <div>
                            <h4 className="cardTitle">Applied Students</h4>
                            <div className="cardText">
                                {props.appliedStudents()}
                            </div>
                        </div> : null
                    }
                    {props.applyText?
                         <div>
                             <h4 className="cardTitle">Apply Text:</h4>
                             <p className="cardText">{props.applyText}</p>
                         </div> : null
                    }
                    <a href={mailAddress}>{props.position.email}</a>
                </CardText>
                <CardActions>
                    {props.cardActions? props.cardActions() : null}
                </CardActions>

            </Card>
        </Col>
    )
}
