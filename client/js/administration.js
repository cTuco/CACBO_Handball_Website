//Au clic sur un bouton, on récupère l'id pour le transmettre dans la route
Template.administration.events({
    'click .btn': function () {
        const idElement = event.target.id;
        //si l'id est une équipe
        console.log(idElement)
        if (idElement !== "nouveauPartenaire" && idElement !== "modifierPartenaire" && idElement !== "supprimerPartenaire") {
            FlowRouter.go('administrationParams', { 'params': idElement });
        } else {
            console.log('partenaire gro')
        }
    },
});