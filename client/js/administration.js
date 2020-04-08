import { Meteor } from 'meteor/meteor';

Meteor.subscribe('equipes');

Template.administration.events({
    'click .btn': function () {
        const idElement = event.target.id;
        FlowRouter.go('administrationParams', { 'params': idElement })
    },
})

Template.calendrierResultats.helpers({
    params() {
        //TODO : Récupérer dans la bdd les infos relatives aux équipes
        const param = FlowRouter.getParam('params');
        var titre = '';
        if (param === 'SG') {
            titre = 'Séniors Garçons';
        }
        if (param === 'SF') {
            titre = 'Séniors Filles';
        }
        return titre;
    },
    idEquipe() {
        const param = FlowRouter.getParam('params');
        return param;
    },

    //afficher tous les matchs de l'équipe
    matchs() {
        const param = FlowRouter.getParam('params');
        return Equipes.find({ categorie: param })//TODO : à changer !!
    },
});

Template.calendrierResultats.events({
    'click #btnMatch': function () {
        console.log("ca passe")
        $('#modalMatch').addClass("visible");
        $('#modalMatch').toggle("visible");
    },
    'click #annuler': function () {
        $('#modalMatch').removeClass("visible");
        $('#modalMatch').toggle("visible");
    },
    'submit #btnMatch': function () {
        $('#modalMatch').removeClass("visible");
        $('#modalMatch').toggle("visible");
    },
    // 'click #modalModifier': function () {
    //     $('#modalModifier').addClass("visible");
    //     $('#modalModifier').toggle("visible");
    // }

    //nouveau match
    // 'click #saveMatch': function () {
    //     //on récupère toutes les données
    //     const equipeDomicile = $('.modal-content').find('#equipeDomicileMatch').val();
    //     console.log(equipeDomicile)
    //     //TODO : Faire les autres input


    //     Meteor.call('matchs.insert', equipeDomicile);

    //     //On efface les données de la modal
    //     $('#modalMatch').removeClass("visible");
    //     $('#modalMatch').toggle("visible");
    // }
})

