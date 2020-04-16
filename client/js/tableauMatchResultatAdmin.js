import { Meteor } from 'meteor/meteor';

Template.tableauMatchResultatAdmin.events({
    'click .filled-in': function () {
        const param = FlowRouter.getParam('params');
        const Equipe = Equipes.findOne({ categorie: param });
        let idMatch = Equipe.matchs[this.id].id;

        if ($('#matchPasse' + JSON.stringify(idMatch)).is(':checked')) {
            $('#matchPasse').attr('checked', true);
            Equipe.matchs[idMatch].passe = true;
        } else {
            $('#matchPasse').attr('checked', false);
            Equipe.matchs[idMatch].passe = false;
        }

        Meteor.call('toggleMatchPasse', Equipe._id, Equipe.matchs);
    }
});