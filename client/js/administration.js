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
})

Template.calendrierResultats.events({
    'click .btn': function () {
        $('.modal').toggle();
    },
})

$(document).ready(function () {
    var $ = require('jquery');
    var dt = require('datatables.net')();
    $('#table_id').DataTable();
});