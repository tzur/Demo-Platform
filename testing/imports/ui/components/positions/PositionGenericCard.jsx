import React from 'react';
import {Col,Row,Grid} from 'react-bootstrap';
import Card from '../../../../node_modules/material-ui/lib/card/card';
import CardActions from '../../../../node_modules/material-ui/lib/card/card-actions';
import CardHeader from '../../../../node_modules/material-ui/lib/card/card-header';
import CardMedia from '../../../../node_modules/material-ui/lib/card/card-media';
import CardTitle from '../../../../node_modules/material-ui/lib/card/card-title';
import FlatButton from '../../../../node_modules/material-ui/lib/flat-button';
import CardText from '../../../../node_modules/material-ui/lib/card/card-text';

export  function PositionGenericCard(props){

    if (props.position === undefined){
        console.error("No position was given to position generic card ")
    }

    return(
        <Col md={10} sm={10}>
            <Card style={{backgroundColor: '#F9F9FD' , marginTop: '10px'}}>
                <CardTitle title={props.position.companyName} subtitle={props.position.jobTitle} />
                <CardText>
                    {props.position.description}
                    {props.appliedStudents?
                        <div>
                            <h4>Applied Students: </h4>
                            {props.appliedStudents()}
                        </div> : null
                    }
                </CardText>
                <CardActions>
                    {props.cardActions? props.cardActions() : null}
                </CardActions>

            </Card>
        </Col>
    )
}
