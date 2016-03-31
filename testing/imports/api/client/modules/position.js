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