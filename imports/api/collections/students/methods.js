import {Meteor} from 'meteor/meteor';
import {Students} from './Students';
Meteor.methods({
    createStudent(){
        let newId;
        try{
            let user = Meteor.user();
            newId = Students.insert({_id: user._id, username: user.username, email: user.email})

        }catch(e){
            throw  Meteor.error("error with adding user type" + e);
        }
        return newId;
    },
    addPositionToStudent(position, applyText){
      console.log("add position to student method");
      try{
          Students.update({_id: Meteor.userId()}, {
              $addToSet: {positionArray: {
                  _id: position._id,
                  companyName: position.companyName,
                  email: position.email,
                  jobTitle: position.jobTitle,
                  position: position.position,
                  description: position.description,
                  applyText: applyText
              }}
          })
      }catch(err){
          throw err;
      }
      return Meteor.userId();
    }
});




