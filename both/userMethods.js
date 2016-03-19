
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
    },
    createStudent(){
        let newId;
        try{
            let user = Meteor.user();
            newId = Students.insert({_id: user._id, username: user.username, email: user.email})

        }catch(e){
            return  Meteor.error("error with adding user type" + e);
        }
        return newId;
    },
    createStartup(){
        let newId;
        try{
            let user = Meteor.user();
            newId = Startups.insert({_id: user._id, companyName: user.username, email: user.email})

        }catch(e){
            return new Meteor.error("error with adding user type" + e);
        }
        return newId;
    }
});

