import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import Startup from '../components/Startup.jsx';
function composerFunction(props, onData){
    let handle;
    let startup;
    handle = Meteor.subscribe('startupById', props.user._id);
    if (handle.ready()){
        startup = Startups.findOne({_id: props.user._id});
        onData(null, {startup});
    }
}
// Note the use of composeWithTracker
export default composeWithTracker(composerFunction)(Startup);

