import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import './equipesCollection.js';

// Meteor.methods({
//     'matchs.insert'(equipeDomicile) {
//         check(equipeDomicile, String); //permet de vérifier le texte et que c'est bien une string

//         //check if user is logged in
//         // if (!Meteor.userId()) {
//         //     throw new Meteor.Error('not-authorized');
//         // }
//         // Insérer le texte dans la bdd
//         Matchs.insert({
//             equipeDomicile,
//             ceratedAt: new Date(),
//             // owner: Meteor.userId(),
//             // username: Meteor.user().username,
//         });
//     },
//     // 'notes.remove'(note) {
//     //     check(note._id, String);

//     //     if (note.owner !== Meteor.userId()) {
//     //         throw new Meteor.Error('not-authorized');
//     //     }
//     //     Notes.remove(note._id);
//     // }
// })