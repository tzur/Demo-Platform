import { Mongo } from 'meteor/mongo';

class StartupsCollection extends Mongo.Collection{
    insert(doc, callback) {
        doc.createdAt = doc.createdAt || new Date();
        return super.insert(doc, callback);
    }
}
export const Startups = new StartupsCollection('Startups');