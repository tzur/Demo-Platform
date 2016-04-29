import {Meteor} from 'meteor/meteor';
import '../../../api/collections/students/methods';

export function apply(position,applyText, callback){
    Meteor.call('addPositionToStudent',position,applyText,(err,result)=>{
        if (err){
            callback(err)
        }else{
            Meteor.call('addStudentToPosition',position._id,applyText,(err,result)=>{
                if (err){
                    callback(err)
                }else{
                    callback(null, result);
                }
            });
        }
    })
}
