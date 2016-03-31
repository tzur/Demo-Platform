import { Meteor } from 'meteor/meteor';
import {Startups} from './collectionStartup';
Meteor.methods({

  createStartup(){
    let newId;
    try{
        let user = Meteor.user();
        newId = Startups.insert({_id: user._id, companyName: user.username, email: user.email})

    }catch(e){
        throw new Meteor.error("error with adding user type" + e);
    }
    return newId;
    }
});
