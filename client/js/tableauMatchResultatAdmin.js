import { Meteor } from 'meteor/meteor';

Template.tableauMatchResultatAdmin.onRendered(function () {
    const param = FlowRouter.getParam('params');
    if (param) {
        const Equipe = Equipes.findOne({ categorie: param });
        if (Equipe.matchs) {
            Equipe.matchs.forEach(match => {
                if (match.passe === true) {
                    $('#matchPasse' + JSON.stringify(match.id)).attr('checked', true)
                } else {
                    $('#matchPasse' + JSON.stringify(match.id)).attr('checked', false)
                }
            });
        }
    }
});

Template.tableauMatchResultatAdmin.events({
    'click .filled-in': function () {
        const param = FlowRouter.getParam('params');
        const Equipe = Equipes.findOne({ categorie: param });
        let idMatch = Equipe.matchs[this.id].id;

        if ($('#matchPasse' + JSON.stringify(idMatch)).is(':checked')) {
            $('#matchPasse' + JSON.stringify(idMatch)).attr('checked', true);
            Equipe.matchs[idMatch].passe = true;
        } else {
            $('#matchPasse' + JSON.stringify(idMatch)).attr('checked', false);
            Equipe.matchs[idMatch].passe = false;
        }
        Meteor.call('toggleMatchPasse', Equipe._id, Equipe.matchs);
    },
});