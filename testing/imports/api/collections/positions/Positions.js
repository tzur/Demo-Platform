import { Mongo } from 'meteor/mongo';

class PositionsCollection extends Mongo.Collection{
    insert(doc, callback) {
        doc.createdAt = doc.createdAt || new Date();
        return super.insert(doc, callback);
    }
}
export const Positions = new PositionsCollection('Positions');