import { Meteor } from 'meteor/meteor';
import { Students } from '../Students';


Meteor.publish('studentById', function(userId){
    return Students.find({_id: userId});
});
