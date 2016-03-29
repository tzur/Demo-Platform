import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import Student from '../../components/Student.jsx';
import {Students} from '../../../api/collections/students/Students';
function composerFunction(props, onData){
        let handle;
        let student;
        handle = Meteor.subscribe('studentById', props.user._id);
        if (handle.ready()){
            student = Students.findOne({_id: props.user._id});
            onData(null, {student});
        }

}
// Note the use of composeWithTracker
export default composeWithTracker(composerFunction)(Student);

