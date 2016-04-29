
import { Meteor } from 'meteor/meteor';

import { Startups } from '../collectionStartup';



Meteor.publish('startupById', function(userId){
    return Startups.find({_id: userId});
});
