import { Meteor } from 'meteor/meteor';

export function meteorLogout(callback){
    Meteor.logout((error)=>{
        if (error){
            callback(error)
        }else{
            callback(null);
        }
    })
}