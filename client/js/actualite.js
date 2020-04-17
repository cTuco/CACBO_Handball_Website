import { Meteor } from 'meteor/meteor';

// Meteor.subscribe('equipes'); REMPLACÉ PAR :
Template.actualite.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('equipes');
    });
});

Template.actualite.helpers({
    categories() {
        return Equipes.find({});
    }
});

// Template.tableauMatchResultatActualite.helpers({
//     //afficher tous les matchs de toutes les équipes
//     matchsAVenir() {
//         const Equipe = Equipes.find({});
//         let matchsAVenir = [];

//         Equipe.forEach(element => {
//             element.matchs.forEach(match => {
//                 if (match.passe === false) {
//                     matchsAVenir.push(match);
//                 }
//             });
//         });
//         return matchsAVenir;
//     },
// });

// Template.tableauMatchResultatActualitePasse.helpers({
//     //afficher tous les matchs de toutes les équipes
//     matchsPasse() {
//         const Equipe = Equipes.find({});
//         let matchsPasse = [];

//         Equipe.forEach(element => {
//             element.matchs.forEach(match => {
//                 if (match.passe === true) {
//                     matchsPasse.push(match);
//                 }
//             });
//         });
//         return matchsPasse;
//     },
// });