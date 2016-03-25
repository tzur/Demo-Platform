import React from 'react';
import StudentContainer from '../containers/StudentContainer.jsx';
import StartupContainer from '../containers/StartupContainer.jsx';
import AuthNavBar from '../components/AuthNavBar.jsx';
import GuestNavBar from '../components/GuestNavBar.jsx';
export default class App extends React.Component{
    componentWillMount(){
        if (!!this.props.user && !this.props.children){
            if (this.props.user.profile.userType == "Student"){
                this.context.router.push('/auth/students/'+this.props.user._id);
            }else{
                this.context.router.push('/auth/startups/'+this.props.user._id);
            }
        }
    }
    render(){
        let child;
        console.log("IM HERERE");
        if (!!this.props.children && !!this.props.user){
            child = React.cloneElement(this.props.children, {user: this.props.user});
        }else{
            child = this.props.children;
        }
        return(
            <div>
                {this.props.user? <AuthNavBar /> : <GuestNavBar /> }
                {child}
            </div>
        )
    }
}
App.contextTypes = {router: React.PropTypes.object};