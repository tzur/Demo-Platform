import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import App from '../layout/App.jsx';
import UserStore from '../../api/client/stores/UserStore';
function composerFunction(props, onData){
    const user = Meteor.user();
    console.log("Auth container");
    if (!!user){
        onData(null, {user});
    }
}
// Note the use of composeWithTracker
export default composeWithTracker(composerFunction)(App);

