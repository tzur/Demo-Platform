import React from 'react';
import {Input} from 'react-bootstrap';
import {ButtonInput} from 'react-bootstrap';
export default class SignupStartup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            companyName: ''
        };
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleCompanyName = this.handleCompanyName.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleUserName(e) {
        this.setState({username: e.target.value});
    }

    handlePassword(e) {
        this.setState({password: e.target.value});
    }

    handleEmail(e) {
        this.setState({email: e.target.value});
    }

    handleCompanyName(e) {
        this.setState({companyName: e.target.value});
    }

    handleSignup(e) {
        e.preventDefault();
        const options = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            userType: "Startup"
        };
        this.props.handleSignup(options);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSignup}>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-sm-4">
                            <Input type="text" label="Company Name" placeholder="Please enter your company name"
                                   value={this.state.username} onChange={this.handleUserName} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-sm-4">
                            <Input type="password" label="Password" placeholder=" Please enter your password"
                                   value={this.state.password} onChange={this.handlePassword} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-sm-4">
                            <Input type="email" label="Email" placeholder="Please enter your Email"
                                   value={this.state.email} onChange={this.handleEmail} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-sm-4">
                            <button type="submit" className="btn btn-primary loginBtn">Signup</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-sm-4">
                            <a href='/login'>Already have an account? switch to login </a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}