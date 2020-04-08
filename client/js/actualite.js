import { Meteor } from 'meteor/meteor';
Meteor.subscribe('equipes');

Template.actualite.helpers({
    //afficher tous les matchs de toutes les équipes
    matchs() {
        return Equipes.find({})//TODO : à changer !!
    },
});