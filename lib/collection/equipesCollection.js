import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';
// import { AutoInit } from 'materialize-css';
SimpleSchema.extendOptions(['autoform']);

Equipes = new Mongo.Collection('equipes');

//si admin connecté alors ça s'ajoute
Equipes.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

Match = new SimpleSchema({
    id: {
        type: Number,
        min: 0,
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


EquipesSchema = new SimpleSchema({
    categorie: {
        type: String,
        label: "Catégorie"
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

//Permet la modification
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