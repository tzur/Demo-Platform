import { Meteor } from 'meteor/meteor';
import {Positions} from './Positions';
Meteor.methods({
    addPosition(position){
        let positionId;
        console.log("add position method");
        try{
            positionId = Positions.insert({
                companyId: position.companyId,
                companyName: position.companyName,
                email: position.email,
                jobTitle: position.jobTitle,
                position: position.position,
                description: position.description
            });
        }catch(e){
            throw e;
        }
        return positionId;
    },
    addStudentToPosition(id, applyText){
        try{
            console.log("add student to position method");
            console.log("position id" +  id);
            Positions.update({_id: id}, {
                $addToSet: {appliedUsers: {
                    _id: Meteor.userId(),
                    username: Meteor.user().username,
                    email: Meteor.user().emails[0].address,
                    applyText: applyText
                }}
            })
        }catch(err){
            throw err;
        }
        return true;
    },
    editPosition(newPosition){
        try{
            console.log("Editing position");
            Positions.update({_id: newPosition._id}, {
                $set:{
                    jobTitle: newPosition.jobTitle,
                    position: newPosition.position,
                    description: newPosition.description
                }
            })
        }catch(e){
            throw e;
        }
        return true;
    },
    deletePosition(position){
        try{
            console.log("Deleting position");
            Positions.remove({_id: position._id});
        }catch(e){
            throw e;
        }
        return true;
    }
});
