//Au clic sur un bouton, on récupère l'id pour le transmettre dans la route
Template.administration.events({
    'click .btn': function () {
        const idElement = event.target.id;

        //si l'id est une équipe
        if (idElement === Equipes.findOne({ categorie: idElement }).categorie) {
            FlowRouter.go('administrationParams', { 'params': idElement });
        } else {
            console.log('partenaire gro')
        }
    },
});