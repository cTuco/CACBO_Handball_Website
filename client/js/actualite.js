import { Meteor } from 'meteor/meteor';

// Meteor.subscribe('equipes'); REMPLACÉ PAR :
Template.actualite.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('equipes');
    })
})

Template.actualite.helpers({
    //afficher tous les matchs de toutes les équipes
    matchs() {
        return Equipes.find({})//TODO : à changer !!
    },
});