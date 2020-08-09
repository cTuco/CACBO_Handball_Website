import { Meteor } from 'meteor/meteor';

Template.partenaires.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('partenaires');
    });
});

Template.modalPartenaire.events({
    //ouverture et fermture des modal
    'submit .btn-primary': function () {
        $('#modalPartenaire').removeClass("visible");
        $('#modalPartenaire').toggle("visible");
    },
    'click #annulerPartenaire': function () {
        console.log('annuler');
        $('#modalPartenaire').removeClass("visible");
        $('#modalPartenaire').toggle("visible");
    },
});

//pour ouvrir la modal d'insertion
Template.partenairesAdmin.events({
    'click #nouveauPartenaire': function () {
        $('#modalPartenaire').addClass("visible");
        $('#modalPartenaire').toggle("visible");
    },
    //ouverture et fermture des modal modification partenaire
    'click .waves-effect': function () {
        $('#modalModifierPartenaire').addClass("visible");
        $('#modalModifierPartenaire').toggle("visible");
    },
    'submit .btn-primary': function () {
        $('#modalPartenaire').removeClass("visible");
        $('#modalPartenaire').toggle("visible");
    },
    'click #annulerPartenaire': function () {
        console.log('annuler');
        $('#modalPartenaire').removeClass("visible");
        $('#modalPartenaire').toggle("visible");
    }
});

Template.tableauPartenairesAdmin.events({
    //supprimer un partenaire
    'click #supprimerPartenaire': function () {
        const partenaire = Partenaires.findOne({ _id: this._id });
        Meteor.call('supprimerPartenaire', partenaire);
    },
});

//permet d'afficher les infos relatives aux partenaires
Template.partenaires.helpers({
    partenaires() {
        return Partenaires.find({});
    }
});
Template.partenairesAdmin.helpers({
    partenaires() {
        return Partenaires.find({});
    }
});