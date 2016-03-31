import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import PositionLayout from '../../components/positions/PositionLayout.jsx';
import {Positions} from '../../../api/collections/positions/Positions';
function composerFunction(props, onData){
    console.log("inside STARTUP position container");
    let handle;
    let positions;
    const companyId = props.startup._id;
    handle = Meteor.subscribe('startupPositions', companyId);
    if (handle.ready()){
        positions = Positions.find({companyId:  companyId}, {sort: {createdAt: -1}}).fetch();
        onData(null, {positions: positions, handleApply: props.handleApply});
    }
}
// Note the use of composeWithTracker
export default composeWithTracker(composerFunction)(PositionLayout);

