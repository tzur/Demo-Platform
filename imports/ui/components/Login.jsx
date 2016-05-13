import React from 'react';
import {Input} from 'react-bootstrap';
import {ButtonInput} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';
import {login} from '../../api/client/modules/user';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            wrongAuth: false
        };
        this.handlePassword = this.handlePassword.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handlePassword(e) {
        this.setState({password: e.target.value})
    }

    handleEmail(e) {
        this.setState({email: e.target.value})
    }

    handleLogin(e) {
        e.preventDefault();
       login({
            password: this.state.password,
            email: this.state.email
        }, (err)=> {
            if (err) {
               this.setState({wrongAuth: true})
            }else{
                console.log("logged in!");
                this.context.router.push('/');
            }
        })
    }
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h4>Welcome to Reviews please login </h4>
                    {this.state.wrongAuth ?
                        <Alert bsStyle="warning">
                            <strong>Wrong login details!</strong>
                        </Alert> : null }
                </div>
                    <form className="loginForm" onSubmit={this.handleLogin}>

                        <div className="row">
                            <div className="col-sm-4">
                            </div>
                            <div className="col-sm-4">
                                <Input type="email" label="Email" placeholder="Please enter your Email"
                                       value={this.state.email} onChange={this.handleEmail} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                            </div>
                            <div className="col-sm-4">
                                <Input type="password" label="Password" placeholder=" Please enter your password"
                                       value={this.state.password} onChange={this.handlePassword} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                            </div>
                            <div className="col-sm-4">
                                <button type="submit" className="btn btn-primary loginBtn">Login</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                            </div>
                            <div className="col-sm-4">
                                <a href='/signup' onClick={this.props.handleSwitch}>Doesn't have account? Sign up </a>
                            </div>
                        </div>
                    </form>
            </div>
        )
    }
}
Login.contextTypes = {router: React.PropTypes.object};
export default Login;