import SimpleSchema from 'simpl-schema';

import { Mongo } from 'meteor/mongo';

SimpleSchema.extendOptions(['autoform']);

//Création collection Partenaires
Partenaires = new Mongo.Collection('partenaires');

//Si admin connecté alors possibilité d'insérer/modifier bdd
Partenaires.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});


//création du schéma PartenairesSchema - 1 equipe peut contenir 0,1 ou plusieurs matchs
PartenairesSchema = new SimpleSchema({
    nom: {
        type: String,
        label: "Nom",
        //personnalisation des modals de création/modif :
        autoform: {
            placeholder: "Nom du partenaire"
        }
    },
    lien: {
        type: String,
        label: "Lien",
        optional: true,
    },
    photo: {
        type: String,
        label: "Photo",
        optional: true,
        autoform: { type: "hidden" }
    },
    admin: {
        type: String,
        label: "Admin",
        autoValue: function () {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Date de creation",
        autoValue: function () {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});

//Permet la modification en bdd
// Meteor.methods({
//     toggleMatchPasse: function (idEquipe, lesMatchs) {
//         Partenaires.update(idEquipe, {
//             $set: {
//                 matchs: lesMatchs
//             }
//         });
//     },
// });

Partenaires.attachSchema(PartenairesSchema);