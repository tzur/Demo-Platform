import React from 'react';
import StudentContainer from '../containers/StudentContainer.jsx';
import StartupContainer from '../containers/startup/StartupContainer.jsx';
import StudentNavBar from '../components/navigation/StudentNavBar.jsx';
import GuestNavBar from '../components/navigation/GuestNavBar.jsx';
import StartupNavBar from '../components/navigation/StartupNavBar.jsx';
import {meteorLogout} from '../../api/client/logout.jsx';
export default class App extends React.Component{
    componentWillMount(){
        if (!!this.props.user && !this.props.children){
            if (this.props.user.profile.userType == "Student"){
                this.context.router.push('/students/'+this.props.user._id);
            }else{
                this.context.router.push('/startups/'+this.props.user._id);
            }
        }
    }
    logout(){
        meteorLogout((error)=>{
            if (error){
                console.log("Coldn't log out");
            }else{
                this.context.router.push('/login');
            }
        })
    }
    getAuthNav(){
        if (this.props.user.profile && this.props.user.profile.userType =="Student"){
            return <StudentNavBar logout={this.logout.bind(this)}/>
        }else{
            return <StartupNavBar logout={this.logout.bind(this)}/>
        }
    }
    render(){
        let child;
        if (!!this.props.children && !!this.props.user){
            child = React.cloneElement(this.props.children, {user: this.props.user});
        }else{
            child = this.props.children;
        }
        return(
            <div>
                {this.props.user? this.getAuthNav() : <GuestNavBar /> }
                {child}
            </div>
        )
    }
}
App.contextTypes = {router: React.PropTypes.object};