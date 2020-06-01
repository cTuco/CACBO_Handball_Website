import { Meteor } from 'meteor/meteor';

//Côté serveur : on affiche uniquement les infos relatives aux équipes qui ont été créées par l'admin
if (Meteor.isServer) {
    Meteor.publish('equipes', function () {
        return Equipes.find({ admin: this.userId })
    });
    Meteor.publish('partenaires', function () {
        return Partenaires.find({ admin: this.userId })
    });
}
