import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import StartupPositions from '../../components/startup/StartupPositions.jsx';
function composerFunction(props, onData){
    console.log("inside startup position container");
    let handle;
    let positions;
    handle = Meteor.subscribe('startupPositions', props.params.id);
    if (handle.ready()){
        positions = Positions.find({companyId:  props.params.id}).fetch();
        if (!positions){
            props.history.push('/login');
        }
        onData(null, {positions: positions, startup: props.startup});
    }
}
// Note the use of composeWithTracker
export default composeWithTracker(composerFunction)(StartupPositions);

