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
    //EN DUR :
    // matchs: [
    //     { semaine: '24 au 29', equipeDomicile: 'CB', scoreDomicile: '33', equipeExterieure: 'Talence', idMatch: '1' },
    //     { semaine: '19 au 24', equipeDomicile: 'Izon', scoreDomicile: '15-16', equipeExterieure: 'CB', idMatch: '2' },
    // ]
    matchs() {
        console.log(Equipes)
        return Equipes.find({})
    },
});

Template.calendrierResultats.events({
    'click #btnMatch': function () {
        $('#modalMatch').addClass("visible");
        $('#modalMatch').toggle("visible");
    },
    // 'click #annuler': function () {
    //     $('#modalMatch').removeClass("visible");
    //     $('#modalMatch').toggle("visible");
    // },
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

