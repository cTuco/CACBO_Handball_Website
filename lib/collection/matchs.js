import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Matchs = new Mongo.Collection('matchs');

// Ca sinsère QUE si on a un equipeId
Matchs.allow({
    insert: function (userId, doc) {
        return !!userId;
    }
})

MatchsSchema = new SimpleSchema({
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
    dateDebutSemaine: {
        type: Date,
        label: "Date debut semaine"
    },
    dateFinSemaine: {
        type: Date,
        label: "Date fin semaine"
    },
    equipeId: {
        type: String,
        autoValue: function () {
            return this.equipeId
        },
        autoform: { type: "hidden" }
    },
    createdAt: {
        type: Date,
        label: "Date de creation",
        autoValue: function () {
            return new Date()
        },
        autoform: { type: "hidden" }
    }
});

Matchs.attachSchema(MatchsSchema);