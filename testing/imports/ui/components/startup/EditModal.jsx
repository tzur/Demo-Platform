import React from 'react';
import FlatButton from '../../../../node_modules/material-ui/lib/flat-button';
import Dialog from '../../../../node_modules/material-ui/lib/dialog';
import RaisedButton from '../../../../node_modules/material-ui/lib/raised-button';
import TextField from '../../../../node_modules/material-ui/lib/text-field';
import {PositionFormView} from '../positions/PositionFormView.jsx';
import EditorModeEdit from '../../../../node_modules/material-ui/lib/svg-icons/editor/mode-edit'
export default class EditModal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open: false,
            position: props.position.position,
            description: props.position.description,
            jobTitle: props.position.jobTitle
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handlePosition = this.handlePosition.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleJobTitle = this.handleJobTitle.bind(this);
    }
    handlePosition(e){
        this.setState({position: e.target.value})
    }
    handleOpen(){
        this.setState({open: true})
    }
    handleClose(){
        this.setState({open: false})
    }
    handleDescription(e){
        this.setState({description: e.target.value})
    }
    handleJobTitle(e){
        this.setState({jobTitle: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const updatedPosition = {
            _id: this.props.position._id,
            jobTitle: this.state.jobTitle,
            description: this.state.description,
            position: this.state.position
        };
        this.props.onSubmit(updatedPosition);
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
                onClick={this.handleSubmit}
            />
        ];
        console.log("edit modal");
        return(
            <div>
                <FlatButton labelStyle={{textTransform: "initial", fontSize: "15px"}}
                            label="Edit" secondary={true}
                            icon={<EditorModeEdit/>}
                            onClick={this.handleOpen}
                />
                <Dialog
                    title="Edit Form"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <h4 className="text-center">Edit Position </h4>
                    <PositionFormView
                        position={this.state.position}
                        handlePosition={this.handlePosition}
                        description={this.state.description}
                        handleDescription={this.handleDescription}
                        jobTitle={this.state.jobTitle}
                        handleJobTitle={this.handleJobTitle}
                        handleSubmit={this.handleSubmit}
                        disableSubmitBtn={true}
                    />
                </Dialog>
            </div>
        )
    }
}