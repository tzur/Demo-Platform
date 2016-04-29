import { Meteor } from 'meteor/meteor';
import '../../../api/collections/positions/methods';

export function addPosition(options, callback){
    Meteor.call('addPosition', options, (err,result)=>{
        if (err){
            callback(err)
        }else{
            callback(null, result);
        }
    })
}
export function editPosition(position,callback){
    Meteor.call('editPosition', position, (err,result)=>{
        if (err){
            callback(err)
        }else{
            callback(null, result);
        }
    })
}
export function deletePosition(position,callback){
    Meteor.call('deletePosition', position, (err,result)=>{
        if (err){
            callback(err)
        }else{
            callback(null, result);
        }
    })
}