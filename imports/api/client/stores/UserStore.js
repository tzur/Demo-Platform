import {Mongo} from 'meteor/mongo'

export default class UserStore{

    static clearStore(){
        this.loggedIn = false;
        this.userType = undefined;
        this.userId = undefined;
    }
    static setUser(userId, userType){
        this.userId = userId;
        this.userType = userType;
        this.loggedIn = true;
    }
}
UserStore.loggedIn = false;
UserStore.userType = undefined;
UserStore.userId = undefined;