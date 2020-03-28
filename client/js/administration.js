Template.administration.events({
    'click .btn': function () {
        const idElement = event.target.id;
        if (idElement == 'SG') {
            FlowRouter.go('administrationParams', { 'params': idElement })
            //afficher template de modification des résultats et du calendrier
        }
        if (idElement == 'SF') {
            FlowRouter.go('administrationParams', { 'params': idElement })
            //FlowRouter.go('calendrier&resultats');
            //afficher template de modification des résultats et du calendrier
        }
    }
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