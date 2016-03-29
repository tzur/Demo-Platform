import { Mongo } from 'meteor/mongo';


class StudentsCollection extends Mongo.Collection{
    insert(doc, callback) {
        doc.createdAt = doc.createdAt || new Date();
        return super.insert(doc, callback);
    }
}
export const Students = new StudentsCollection('Students');