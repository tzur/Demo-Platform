import {Meteor} from 'meteor/meteor';
import {Students} from './Students';
Meteor.methods({
    createStudent(){
        let newId;
        try{
            let user = Meteor.user();
            newId = Students.insert({_id: user._id, username: user.username, email: user.email})

        }catch(e){
            return  Meteor.error("error with adding user type" + e);
        }
        return newId;
    }
});




