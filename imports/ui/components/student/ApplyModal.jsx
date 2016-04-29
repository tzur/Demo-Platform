import React from 'react';
import FlatButton from '../../../../node_modules/material-ui/lib/flat-button';
import Dialog from '../../../../node_modules/material-ui/lib/dialog';
import RaisedButton from '../../../../node_modules/material-ui/lib/raised-button';
import TextField from '../../../../node_modules/material-ui/lib/text-field';
export default class ApplyModal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open: false,
            applyText: ''
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleApply = this.handleApply.bind(this);
    }
    handleText(e){
        this.setState({applyText: e.target.value})
    }
    handleOpen(){
        this.setState({open: true})
    }
    handleClose(){
        this.setState({open: false})
    }
    handleApply(){
        this.props.onSubmit(this.props.position, this.state.applyText);
        this.handleClose();
    }
    render(){
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleApply}
            />
        ];
        return(
            <div>
                <RaisedButton backgroundColor="#759DEF" label="Apply" onClick={this.handleOpen} />
                <Dialog
                    title="Apply Form"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <h4>We at {this.props.position.companyName} Wants to hear you out! </h4>
                    <TextField multiLine={true} rows={3} fullWidth={true} value={this.state.applyText} onChange={this.handleText} />
                </Dialog>
            </div>
        )
    }
}