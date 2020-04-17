import SimpleSchema from 'simpl-schema';

import { Mongo } from 'meteor/mongo';

SimpleSchema.extendOptions(['autoform']);

//Création collection Equipes
Equipes = new Mongo.Collection('equipes');

//Si admin connecté alors possibilité d'insérer/modifier bdd
Equipes.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

//création du schéma Match - 1 match n'est contenu que dans une et une seule équipe
Match = new SimpleSchema({
    id: {
        type: Number,
        min: 0,
        autoform: {
            placeholder: "Ce chiffre doit être unique"
        }
    },
    // dateDebutSemaine: {
    //     type: Date,
    //     min: new Date(2020, 03, 14)//13 avril 2020
    // },
    // dateFinSemaine: {
    //     type: Date
    // },
    equipeDomicile: {
        type: String,
        label: "Equipe à domicile"
    },
    equipeExterieure: {
        type: String,
        label: "Equipe extérieure"
    },
    date: {
        type: Date,
        label: "Date",
    },
    horaire: {
        type: String,
        label: "Horaire"
    },
    passe: {
        type: Boolean,
        label: "Match passé ? ",
        autoform: {
            type: "hidden"
        },
        defaultValue: false
    },
    pointsDomicile: {
        type: Number,
        label: "Score domicile",
        optional: true
    },
    pointsExterieur: {
        type: Number,
        label: "Score extérieur",
        optional: true
    }
});

//création du schéma EquipesSchema - 1 equipe peut contenir 0,1 ou plusieurs matchs
EquipesSchema = new SimpleSchema({
    categorie: {
        type: String,
        label: "Catégorie",

        //personnalisation des modals de création/modif :
        autoform: {
            placeholder: "Ex : si Séniors Garçons alors entrer : 'SG' / Séniors Filles : SF / -18G : -18G / ..."
        }
    },
    photo: {
        type: String,
        label: "Photo",
        optional: true,
        autoform: { type: "hidden" }
    },
    matchs: [Match],
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
Meteor.methods({
    toggleMatchPasse: function (idEquipe, lesMatchs) {
        Equipes.update(idEquipe, {
            $set: {
                matchs: lesMatchs
            }
        });
    },
});

Equipes.attachSchema(EquipesSchema);