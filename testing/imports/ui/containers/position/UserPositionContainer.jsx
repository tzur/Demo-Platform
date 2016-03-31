import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import StartupPositions from '../../components/startup/StartupPositions.jsx';
import {Positions} from '../../../api/collections/positions/Positions';
function composerFunction(props, onData){
    console.log("inside  USER startup position container");
    if (props.userReady){
        console.log("user is ready inside startup positions");
        let handle;
        let positions;
        handle = Meteor.subscribe('startupPositions', props.user._id);
        if (handle.ready()){
            positions = Positions.find({companyId:  props.user._id}, {sort: {createdAt: -1}}).fetch();
            onData(null, {positions: positions, startup: props.user});
        }
    }
}
// Note the use of composeWithTracker
export default composeWithTracker(composerFunction)(StartupPositions);

