
Meteor.publish('test', function(){
    return Meteor.users.find({});
});
Meteor.publish('studentById', function(userId){
    return Students.find({_id: userId});
});
Meteor.publish('startupById', function(userId){
    return Startups.find({_id: userId});
});
Meteor.publish('startupPositions', function(startupId){
    return Positions.find({companyId: startupId});
});