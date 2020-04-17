
//Au clic sur une des équipes, on récupère l'id pour le transmettre dans la route
Template.administration.events({
    'click .btn': function () {
        const idElement = event.target.id;
        FlowRouter.go('administrationParams', { 'params': idElement })
    },
})