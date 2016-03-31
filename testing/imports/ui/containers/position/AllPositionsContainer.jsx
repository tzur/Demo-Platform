import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import StartupPositions from '../../components/startup/StartupPositions.jsx';
import PositionLayout from '../../components/positions/PositionLayout.jsx';
import {Positions} from '../../../api/collections/positions/Positions';
function composerFunction(props, onData){
    console.log("inside All position container");
    let handle;
    let positions;
    handle = Meteor.subscribe('allPositions');
    if (handle.ready()){
        positions = Positions.find({}, {sort: {createdAt: -1}}).fetch();
        onData(null, {positions: positions, handleApply: props.handleApply});
    }


}
export default composeWithTracker(composerFunction)(PositionLayout);

