//import React from 'react';
//import Student from '../components/Student.jsx';
//import Startup from '../components/Startup.jsx';
//import {Meteor} from 'meteor/meteor';
//import StudentContainer from '../containers/StudentContainer.jsx';
//import StartupContainer from '../containers/StartupContainer.jsx';
//export default class AuthUserLogic extends React.Component {
//   render(){
//       let component;
//       console.log("sdf");
//
//       if (this.props.user.profile.userType == "Student") {
//           component = <StudentContainer user={this.props.user}/>;
//       } else{
//           component = <StartupContainer user={this.props.user}/>;
//       }
//       return(
//           <div>
//               {component}
//           </div>
//       )
//   }
//}
//AuthUserLogic.PropTypes = {user: React.PropTypes.object};