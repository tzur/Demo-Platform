import React from 'react';
import {Row, Col, Button, Input} from 'react-bootstrap';
import { addPosition } from '../../../api/client/addPosition.jsx';
export default class PositionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            companyName: '',
            contactMail: '',
            jobTitle: '',
            position: '',
            target: '',
            description: ''
        };
        this.handlePosition = this.handlePosition.bind(this);
        this.handleTarget = this.handleTarget.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleJobTitle = this.handleJobTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                console.log("Success");
            }
        })
    }
    render(){
        return(
            <div className="container">
                <h3 className="text-center">New Position</h3>
                <form>
                    <Row>
                        <Col md={4} xs={4}>
                        </Col>
                        <Col md={4} xs={4}>
                            <Input type="select" label="Position"  onChange={this.handlePosition}  required>
                                <option value="">Please select</option>
                                <option value="fullTime" >Full-Time</option>
                                <option value="partialTime" >Partial-Time</option>
                                <option value="limitedFullTime" >Limited Full-Time</option>
                            </Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} xs={4}>
                        </Col>
                        <Col md={4} xs={4}>
                            <Input type="text" label="Job Title" value={this.state.jobTitle} onChange={this.handleJobTitle} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} xs={4}>
                        </Col>
                        <Col md={4} xs={4}>
                            <Input type="textarea" rows="6" cols="50" label="Job Description" value={this.state.description} onChange={this.handleDescription} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} xs={4}>
                        </Col>
                        <Col md={4} xs={4}>
                            <Button bsStyle="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }
}
PositionForm.PropTypes= {startup: React.PropTypes.object};