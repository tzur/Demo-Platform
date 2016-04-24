import React from 'react';
import {ButtonInput, Button, Input} from 'react-bootstrap';
import {signup} from '../../api/client/modules/user';
import SignupStudent from '../components/student/SignupStudent.jsx';
import SignupStartup from '../components/startup/SignupStartup.jsx';
import {Meteor} from 'meteor/meteor';
export default class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            student: false,
            startup: false
        };
        this.handleStudent = this.handleStudent.bind(this);
        this.handleStartup = this.handleStartup.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }
    handleStudent(){
        this.setState({startup: false, student: true})
    }
    handleStartup(){
        this.setState({startup: true, student: false})
    }
    handleSignup(options) {
        signup({
            username: options.username,
            password: options.password,
            email: options.email,
            userType: options.userType
        }, (err,result)=>{
            if (err){
                console.log(err);
            }else{
                console.log("SDfdsf");
                Meteor.loginWithPassword(options.email, options.password, (error)=>{
                    if (error){
                        callback(err);
                    }else{
                       this.context.router.push('/');
                    }
                });
            }
        })
    }
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h4>Who are you?</h4>
                    <Button bsStyle="primary" className="signupBtn" onClick={this.handleStudent}>Student</Button>
                    <Button bsStyle="primary" className="signupBtn" onClick={this.handleStartup}>Startup</Button>
                </div>

                {this.state.student? <SignupStudent handleSignup={this.handleSignup}/>: null}
                {this.state.startup? <SignupStartup handleSignup={this.handleSignup} />: null}
            </div>
        )
    }
}
Signup.contextTypes = {router: React.PropTypes.object};
//TODO need to add this to signup Startup.
//<Row>
//    <Col md={4} xs={4}>
//    </Col>
//    <Col md={4} xs={4}>
//        <Input type="text" label="Company Name" value={this.state.companyName} onChange={this.handleCompanyName} />
//    </Col>
//</Row>
//<Row>
//<Col md={4} xs={4}>
//    </Col>
//    <Col md={4} xs={4}>
//    <Input type="email" label="Contact E-Mail" value={this.state.contactMail} onChange={this.handleContactMail} />
//</Col>
//</Row>