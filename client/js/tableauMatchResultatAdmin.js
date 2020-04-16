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
    //au clic sur les checkbox
    'click .filled-in': function () {
        const param = FlowRouter.getParam('params');
        const Equipe = Equipes.findOne({ categorie: param });
        let idMatch = this.id;
        let index;

        Equipe.matchs.forEach(element => {
            if (element.id == this.id) {
                index = Equipe.matchs.indexOf(element);
            }
        });

        if ($('#matchPasse' + JSON.stringify(idMatch)).is(':checked')) {
            $('#matchPasse' + JSON.stringify(idMatch)).attr('checked', true);
            Equipe.matchs[index].passe = true;
        } else {
            $('#matchPasse' + JSON.stringify(idMatch)).attr('checked', false);
            Equipe.matchs[index].passe = false;
        }
        Meteor.call('toggleMatchPasse', Equipe._id, Equipe.matchs);
    },

    //au clic sur bouton modifier
    'click .modal-trigger-update': function () {
        const param = FlowRouter.getParam('params');
        const Equipe = Equipes.findOne({ categorie: param });
        let idMatch = Equipe.matchs[this.id].id;

        $('#modalModifierMatch').addClass("visible idMatch" + JSON.stringify(idMatch));
        $('#modalModifierMatch').toggle("visible idMatch" + JSON.stringify(idMatch));
    },
    'click #annulerModifier': function () {
        $('#modalModifierMatch').toggle("visible");
        $('#modalModifierMatch').removeClass("visible");
    },

    //au cluc sur bouton supprimer
    'click .modal-trigger-delete': function () {
        const param = FlowRouter.getParam('params');
        const Equipe = Equipes.findOne({ categorie: param });

        Equipe.matchs.forEach(element => {
            if (element.id == this.id) {
                let index = Equipe.matchs.indexOf(element);
                Equipe.matchs.splice(index, 1);
            }
        });
        Meteor.call('toggleMatchPasse', Equipe._id, Equipe.matchs);
    },
});