import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import StartupPositions from '../../components/startup/StartupPositions.jsx';
function composerFunction(props, onData){
    console.log("inside STARTUP position container");
    let handle;
    let positions;
    const companyId = props.params.id;
    handle = Meteor.subscribe('startupPositions', companyId);
    if (handle.ready()){
        positions = Positions.find({companyId:  companyId}).fetch();
        onData(null, {positions: positions, startup: props.user});
    }


}
// Note the use of composeWithTracker
export default composeWithTracker(composerFunction)(StartupPositions);

