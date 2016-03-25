import React from 'react';
import {Col,Row,Grid} from 'react-bootstrap';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

export default class Position extends React.Component{
    render(){
        return(
            <Col md={4} sm={4}>
                <Card style={{backgroundColor: '#F9F9FD' , marginTop: '10px'}}>
                    <CardTitle title={this.props.position.companyName} subtitle={this.props.position.jobTitle} />
                    <CardText>
                        {this.props.position.description}
                    </CardText>
                    <CardActions>
                        <FlatButton label="Apply" />
                    </CardActions>
                </Card>
            </Col>
        )
    }
}
Position.PropTypes = {position: React.PropTypes.object};
