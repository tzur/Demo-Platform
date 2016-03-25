import { Meteor } from 'meteor/meteor';

export function login(options, callback){
    Meteor.loginWithPassword(options.email, options.password, (error)=>{
        if (error){
            callback(error)
        }else{
            callback(null);
        }
    })
}