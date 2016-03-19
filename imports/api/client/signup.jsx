
export function signup(options, callback){
    console.log("sdsss12")
    Accounts.createUser({
        username: options.username,
        password: options.password,
        email: options.email
    }, (err)=>{
        if (err){
            callback(err);
        }else{
            Meteor.loginWithPassword(options.email, options.password, (error)=>{
                if (error){
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
            });
        }
    })
}