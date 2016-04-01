import React from 'react';
import {Row, Col, Button, Input} from 'react-bootstrap';
import { addPosition } from '../../../api/client/modules/position';
import FlatButton from '../../../../node_modules/material-ui/lib/flat-button';
import TextField from '../../../../node_modules/material-ui/lib/text-field';
import RadioButton from '../../../../node_modules/material-ui/lib/radio-button';
import RadioButtonGroup from '../../../../node_modules/material-ui/lib/radio-button-group';
import {CONSTANTS} from '../../../api/client/modules/langauage';
export default class PositionForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            companyName: '',
            contactMail: '',
            jobTitle: '',
            position: 'fullTime',
            target: '',
            description: '',
            openForm: false
        };
        this.handlePosition = this.handlePosition.bind(this);
        this.handleTarget = this.handleTarget.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleJobTitle = this.handleJobTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openForm = this.openForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }
    handleJobTitle(e){
        this.setState({jobTitle: e.target.value})
    }
    handlePosition(e){
        this.setState({position: e.target.value})
    }
    handleTarget(e){
        this.setState({target: e.target.value})
    }
    handleDescription(e){
        this.setState({description: e.target.value})
    }
    openForm(){
        this.setState({
            openForm: true
        })
    }
    closeForm(){
        this.setState({
            openForm: false
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const options = {
            companyId: this.props.startup._id,
            companyName: this.props.startup.companyName,
            email: this.props.startup.email,
            jobTitle: this.state.jobTitle,
            position: this.state.position,
            description: this.state.description
        };
        addPosition(options, (err, result)=>{
            if (err){
                console.log(err)
            }else{
                this.setState({
                    companyName: '',
                    contactMail: '',
                    jobTitle: '',
                    position: '',
                    target: '',
                    description: '',
                    openForm: false
                })
            }
        })
    }
    render(){
        console.log("position form render");
        return(
            <div className="container">
                <Row>
                    <Col md={4} xs={4}>
                    </Col>
                    <Col md={4} xs={4}>
                        {this.state.openForm?
                            <FlatButton primary={true}
                                        onClick={this.closeForm}
                                        label="OH!Sorry just wanted to check what will happen"/>
                            :
                            <FlatButton primary={true}
                                        onClick={this.openForm}
                                        label="Just figured out that you need another student?!"/>
                        }
                    </Col>
                </Row>
                {this.state.openForm?
                <form>
                    <Row>
                        <Col md={4} xs={4}>
                        </Col>
                        <Col md={4} xs={4}>
                                <h4>Choose Position:</h4>
                                <RadioButtonGroup name="position" onChange={this.handlePosition} defaultSelected="fullTime">
                                    <RadioButton
                                        value={CONSTANTS.FULL_TIME}
                                        label="Full Time"
                                    />
                                    <RadioButton
                                        value={CONSTANTS.PARTIAL_TIME}
                                        label="Partial-Time"
                                    />
                                    <RadioButton
                                        value={CONSTANTS.LIMITED_FULL_TIME}
                                        label="Limited Full Time"
                                    />
                                </RadioButtonGroup>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} xs={4}>
                        </Col>
                        <Col md={4} xs={4}>
                            <TextField hintText="Job Title"
                                       floatingLabelText="Job Title"
                                       value={this.state.jobTitle}
                                       onChange={this.handleJobTitle} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} xs={4}>
                        </Col>
                        <Col md={4} xs={4}>
                            <TextField hintText="Job Description"
                                       floatingLabelText="Job Description"
                                       value={this.state.description}
                                       multiLine={true}
                                       rows={4}
                                       fullWidth={true}
                                       onChange={this.handleDescription} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} xs={4}>
                        </Col>
                        <Col md={4} xs={4}>
                            <Button id="submitBtn" bsStyle="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                        </Col>
                    </Row>
                </form>
                : null}
            </div>
        )
    }
}
PositionForm.PropTypes= {
    startup: React.PropTypes.object,
    openForm: React.PropTypes.func,
    closeForm: React.PropTypes.func
};