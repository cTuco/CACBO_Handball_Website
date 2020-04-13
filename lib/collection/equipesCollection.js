import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';
SimpleSchema.extendOptions(['autoform']);

Equipes = new Mongo.Collection('equipes');

//si admin connecté alors ça s'ajoute
Equipes.allow({
    insert: function (userId, doc) {
        return !!userId;
    }
})

Match = new SimpleSchema({
    id: {
        type: Number
    },
    dateDebutSemaine: {
        type: Date,
        min: new Date(2020, 03, 14)//13 avril 2020
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
    // matchs: Match,
    matchs: [Match],
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