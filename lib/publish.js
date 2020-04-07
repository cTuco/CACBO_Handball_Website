import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
    Meteor.publish('equipes', function () {
        // console.log("ca passe dans publish ! ")
        return Equipes.find({ admin: this.userId })
    });
}
