import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import App from '../layout/App.jsx';
import UserStore from '../../api/client/stores/UserStore';
function composerFunction(props, onData){
    const user = Meteor.user();
    let handler;
    console.log("auth container");
    let studentType = false;
    if (!!user && !!user.profile){
        if (user.profile.userType === 'Student'){
            handler = Meteor.subscribe('studentById', user._id);
            studentType = true;
        }else{
            handler = Meteor.subscribe('startupById', user._id);
        }
        if (handler.ready()){
            let startupStudentUser;
            if (studentType) {
                startupStudentUser = Students.findOne({_id: user._id});

            }else{
                startupStudentUser = Startups.findOne({_id: user._id});
            }
            onData(null, {userReady: true, user: startupStudentUser, studentType: studentType})
        }

    }else{
        onData(null, {userReady: false});
    }



}
// Note the use of composeWithTracker
export default composeWithTracker(composerFunction)(App);

