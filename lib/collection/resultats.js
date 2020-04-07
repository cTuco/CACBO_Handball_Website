import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Resultats = new Mongo.Collection('resultats');

ResultatsSchema = new SimpleSchema({
    equipeDomicile: {
        type: String,
        label: "Equipe a domicile"
    },
    equipeExterieure: {
        type: String,
        label: "Equipe extérieure"
    },
    scoreDomicile: {
        type: Number,
        label: "Score domicile"
    },
    scoreExterieur: {
        type: Number,
        label: "Score exterieur"
    },
    dateDebutSemaine: {
        type: Date,
        label: "Date debut semaine"
    },
    dateFinSemaine: {
        type: Date,
        label: "Date fin semaine"
    },
    ceratedAt: {
        type: Date,
        label: "Date de creation",
        autoValue: function () {
            return new Date()
        }
    }
});

Resultats.attachSchema(ResultatsSchema);