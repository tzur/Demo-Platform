import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../ui/layout/App.jsx';
import AuthContainer from '../ui/containers/authContainer.jsx';
import Login from '../ui/components/Login.jsx';
import Signup from '../ui/components/Signup.jsx';
import Student from '../ui/components/Student.jsx';
import Startup from '../ui/components/startup/Startup.jsx';
import StartupContainer from '../ui/containers/startup/StartupContainer.jsx';
import StudentContainer from '../ui/containers/StudentContainer.jsx';
import UserStore from '../api/client/stores/UserStore';
import StartupPositionContainer from '../ui/containers/startup/StartupPositionContainer.jsx';
import PositionForm from '../ui/components/startup/PositionForm.jsx'
// route components

function redirectUser(nextState, replace){
    replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
    })
}
export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={AuthContainer}>
            <Route path="login" component={Login}/>
            <Route path="signup" component={Signup}/>
            <Route path="startups/:id" component={StartupContainer}>
                <Route path="positions" component={StartupPositionContainer}/>
                <Route path="newPosition" component={PositionForm}/>
            </Route>
            <Route path="students/:id" component={StudentContainer}/>
            <Route path="*"  onEnter={redirectUser}/>
        </Route>
    </Router>
);

