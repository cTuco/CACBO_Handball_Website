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
        return FlowRouter.getParam('params');
    },
})