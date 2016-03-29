import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import Startup from '../../components/startup/Startup.jsx';
import {Startups} from '../../../api/collections/collectionStartup/collectionStartup';
function composerFunction(props, onData){
    let handle;
    let startup;
    console.log("startup container");
    handle = Meteor.subscribe('startupById', props.params.id);
    if (handle.ready()){
        startup = Startups.findOne({_id:  props.params.id});
        if (!startup){
            props.history.push('/login');
        }
        onData(null, {startup});
    }
}
// Note the use of composeWithTracker
export default composeWithTracker(composerFunction)(Startup);

