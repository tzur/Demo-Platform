
import { Meteor } from 'meteor/meteor';

import { Positions } from '../Positions';


Meteor.publish('startupPositions', function(startupId){
    return Positions.find({companyId: startupId});
});
Meteor.publish('allPositions', function(){
    return Positions.find({});
});