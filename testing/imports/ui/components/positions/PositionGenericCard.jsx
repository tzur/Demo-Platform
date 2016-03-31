import React from 'react';
import {Col,Row,Grid} from 'react-bootstrap';
import Card from '../../../../node_modules/material-ui/lib/card/card';
import CardActions from '../../../../node_modules/material-ui/lib/card/card-actions';
import CardHeader from '../../../../node_modules/material-ui/lib/card/card-header';
import CardMedia from '../../../../node_modules/material-ui/lib/card/card-media';
import CardTitle from '../../../../node_modules/material-ui/lib/card/card-title';
import FlatButton from '../../../../node_modules/material-ui/lib/flat-button';
import CardText from '../../../../node_modules/material-ui/lib/card/card-text';

export default class PositionGenericCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Col md={10} sm={10}>
                <Card style={{backgroundColor: '#F9F9FD' , marginTop: '10px'}}>
                    <CardTitle title={this.props.position.companyName} subtitle={this.props.position.jobTitle} />
                    <CardText>
                        {this.props.position.description}
                    </CardText>
                </Card>
            </Col>
        )
    }
}
PositionGenericCard.PropTypes = {position: React.PropTypes.object};
