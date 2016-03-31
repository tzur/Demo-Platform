import React from 'react';
import StudentContainer from '../containers/student/StudentContainer.jsx';
import StartupContainer from '../containers/startup/StartupContainer.jsx';
import StudentNavBar from '../components/navigation/StudentNavBar.jsx';
import GuestNavBar from '../components/navigation/GuestNavBar.jsx';
import StartupNavBar from '../components/navigation/StartupNavBar.jsx';
import Student from '../components/student/Student.jsx';
import Startup from '../components/startup/Startup.jsx';
import {meteorLogout} from '../../api/client/modules/user';
export default class App extends React.Component{
    //componentWillMount(){
    //    if (!!this.props.user && !this.props.children){
    //        if (this.props.user.profile.userType == "Student"){
    //            this.context.router.push('/students/'+this.props.user._id);
    //        }else{
    //            this.context.router.push('/collectionStartup/'+this.props.user._id);
    //        }
    //    }
    //}
    logout(){
        meteorLogout((error)=>{
            if (error){
                console.log("Coldn't log out");
            }else{
                this.context.router.push('/');
            }
        })
    }
    getAuthNav(){
        if (this.props.studentType){
            return <StudentNavBar logout={this.logout.bind(this)}/>
        }else{
            return <StartupNavBar logout={this.logout.bind(this)}/>
        }
    }
    render(){
        let child;
        if (!!this.props.children && this.props.userReady){
            child = React.cloneElement(this.props.children, {user: this.props.user, userReady: this.props.userReady});
        }else if (this.props.userReady){
            if (this.props.studentType){
               child = <Student user={this.props.user}/>
            }else{
                child = <Startup user={this.props.user} />
            }
        }else{
            child = this.props.children;
        }
        return(
            <div>
                {this.props.userReady? this.getAuthNav() : <GuestNavBar /> }
                {child?  child : <h3 className="text-center">You're not logged in, please login.</h3>}
            </div>
        )
    }
}
App.contextTypes = {router: React.PropTypes.object};