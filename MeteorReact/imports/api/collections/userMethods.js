import {Meteor} from 'meteor/meteor';

Meteor.methods({
    addUserType(userType){
        try{
            Meteor.users.update({_id: Meteor.userId()}, {
                $set: {'profile.userType': userType}
            });
        }catch(e){
            return  Meteor.error("error with adding user type" + e);
        }
        return Meteor.userId();
    }
});

