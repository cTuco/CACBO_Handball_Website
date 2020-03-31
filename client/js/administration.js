import { Resultats, Matchs } from '../../lib/collections.js';

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
    //EN DUR :
    donnees: [
        { semaine: '24 au 29', equipeD: 'CB', score: '33-20', equipeE: 'Talence' },
        { semaine: '19 au 24', equipeD: 'Izon', score: '15-16', equipeE: 'CB' },
        { semaine: '12 au 19', equipeD: 'CB', score: '30/02 à 17h30', equipeE: 'Pessac' },
    ]
})

Template.calendrierResultats.events({
    'click #btnMatch': function () {
        $('#modalMatch').addClass("visible");
        $('#modalMatch').toggle("visible");
    },
    'click #saveData': function () {
        $('#modalMatch').removeClass("visible");
        $('#modalMatch').toggle("visible");
    },
    'click #annuler': function () {
        $('#modalMatch').removeClass("visible");
        $('#modalMatch').toggle("visible");
    }
})

