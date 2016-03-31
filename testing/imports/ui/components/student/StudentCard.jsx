import React from 'react';
import {Col,Row,Grid} from 'react-bootstrap';
import Card from '../../../../node_modules/material-ui/lib/card/card';
import CardActions from '../../../../node_modules/material-ui/lib/card/card-actions';
import CardHeader from '../../../../node_modules/material-ui/lib/card/card-header';
import CardMedia from '../../../../node_modules/material-ui/lib/card/card-media';
import CardTitle from '../../../../node_modules/material-ui/lib/card/card-title';
import FlatButton from '../../../../node_modules/material-ui/lib/flat-button';
import CardText from '../../../../node_modules/material-ui/lib/card/card-text';

export  function StudentCard(props){
    if (props.user === undefined){
        console.error("No position was given to position generic card ")
    }

    return(
        <div>
            <p>{props.user.username}</p>
        </div>
    )
}
