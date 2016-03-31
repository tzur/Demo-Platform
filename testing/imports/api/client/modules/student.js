import {Meteor} from 'meteor/meteor';
import '../../../api/collections/students/methods';

export function apply(position, callback){
    Meteor.call('addPositionToStudent',position,(err,result)=>{
        if (err){
            callback(err)
        }else{
            Meteor.call('addStudentToPosition',position._id,(err,result)=>{
                if (err){
                    callback(err)
                }else{
                    callback(null, result);
                }
            });
        }
    })
}
