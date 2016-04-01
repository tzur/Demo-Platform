import React from 'react';
import {Col,Row,Grid} from 'react-bootstrap';
import Card from '../../../../node_modules/material-ui/lib/card/card';
import CardActions from '../../../../node_modules/material-ui/lib/card/card-actions';
import CardHeader from '../../../../node_modules/material-ui/lib/card/card-header';
import CardMedia from '../../../../node_modules/material-ui/lib/card/card-media';
import CardTitle from '../../../../node_modules/material-ui/lib/card/card-title';
import FlatButton from '../../../../node_modules/material-ui/lib/flat-button';
import CardText from '../../../../node_modules/material-ui/lib/card/card-text';
import Dialog from '../../../../node_modules/material-ui/lib/dialog';
import {capitalize} from '../../../api/client/modules/langauage';
export  default class StudentCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           modalOpen: false
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleOpen(){
        this.setState({modalOpen: true})
    }
    handleClose(){
        this.setState({modalOpen: false})
    }

    render(){
        const actions= [
            <FlatButton
                label="Close"
                secondary={true}
                onClick={this.handleClose}
            />
        ];
        const mailString = "mailto:" +this.props.user.email;
        const title = capitalize(this.props.user.username) + " Apply Form";
        return(
            <div>
                <FlatButton onClick={this.handleOpen} label={this.props.user.username}/>
                <Dialog
                    title={title}
                    modal={false}
                    actions={actions}
                    open={this.state.modalOpen}
                    onRequestClose={this.handleClose}
                >
                    <h4>{this.props.user.applyText}</h4>
                    <a href={mailString}>{this.props.user.email}</a>
                </Dialog>

            </div>
        )
    }

}
