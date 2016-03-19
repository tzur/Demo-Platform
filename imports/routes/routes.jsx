import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../ui/layout/App.jsx';
import AuthContainer from '../ui/containers/authContainer.jsx';
import Login from '../ui/components/Login.jsx';
import Signup from '../ui/components/Signup.jsx';
import Student from '../ui/components/Student.jsx';
import Startup from '../ui/components/Startup.jsx';
import AuthUserLogic from '../ui/containers/AuthUserLogic.jsx';
import StartupContainer from '../ui/containers/StartupContainer.jsx';
import StudentContainer from '../ui/containers/StudentContainer.jsx';
import UserStore from '../api/client/stores/UserStore';
// route components

function redirectUser(nextState, replace){
    console.log("redirect");
    if (UserStore.loggedIn){
        console.log("yay");
    }
    replace({
        pathname: '/auth',
        state: { nextPathname: nextState.location.pathname }
    })
}
export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="login" component={Login}/>
            <Route path="signup" component={Signup}/>
        </Route>
        <Route path="/auth" component={AuthContainer}>
            <Route path="students/:id" component={StudentContainer}/>
            <Route path="startups/:id" component={StartupContainer}/>
            <Route path="*"  onEnter={redirectUser}/>
        </Route>
    </Router>
);

