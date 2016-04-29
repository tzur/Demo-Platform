import { Meteor } from 'meteor/meteor';
import '../../../api/collections/userMethods';
export function login(options, callback){
    Meteor.loginWithPassword(options.email, options.password, (error)=>{
        if (error){
            callback(error)
        }else{
            callback(null);
        }
    })
}

export function signup(options, callback){
    console.log("sdsss12");
    Accounts.createUser({
        username: options.username,
        password: options.password,
        email: options.email
    }, (err)=>{
        if (err){
            callback(err);
        }else{
            Meteor.call('addUserType', options.userType, (err)=>{
                if (err){
                    callback(err);
                }else{
                    if (options.userType == "Student"){
                        Meteor.call('createStudent', (err, result) =>{
                            if (err){
                                callback(err);
                            } else{
                                callback(undefined, result)
                            }
                        });
                    }else{
                        Meteor.call('createStartup', (err, result) =>{
                            if (err){
                                callback(err);
                            } else{
                                callback(undefined, result)
                            }
                        });
                    }
                }
            });
        }
    })
}
export function meteorLogout(callback){
    Meteor.logout((error)=>{
        if (error){
            callback(error)
        }else{
            callback(null);
        }
    })
}