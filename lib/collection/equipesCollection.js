import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Equipes = new Mongo.Collection('equipes');

//si admin connecé alors ça s'ajoute
Equipes.allow({
    insert: function (userId, doc) {
        return !!userId;
    }
})

Match = new SimpleSchema({
    dateDebutSemaine: {
        type: Date
    },
    dateFinSemaine: {
        type: Date
    },
    equipeDomicile: {
        type: String,
        label: "Equipe a domicile"
    },
    equipeExterieure: {
        type: String,
        label: "Equipe extérieure"
    },
    date: {
        type: Date,
        label: "Date"
    },
    horaire: {
        type: String,
        label: "Horaire"
    },
})

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
    matchs: {
        type: Match
    },
    // resultats: {
    //     type: String,
    //     autoValue: function () {
    //         return this.resultatsId
    //     }
    // },
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

Equipes.attachSchema(EquipesSchema);