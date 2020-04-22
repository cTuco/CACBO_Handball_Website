Template.calendrierResultats.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('equipes');
    });
});

Template.calendrierResultats.helpers({
    //récupère l'id de la route pour l'afficher
    params() {
        const param = FlowRouter.getParam('params');
        return param;
    },
    //affiche tous les matchs de l'équipe qui a l'id 'param'
    matchsEquipe() {
        const param = FlowRouter.getParam('params');
        return Equipes.find({ categorie: param });
    },
});

Template.calendrierResultats.events({
    //ouverture et fermture des modal
    'click .modal-trigger-ajout': function () {
        $('#modalMatch').addClass("visible");
        $('#modalMatch').toggle("visible");
    },
    'submit .btn-primary': function () {
        $('#modalMatch').removeClass("visible");
        $('#modalMatch').toggle("visible");
    },
    'click #annuler': function () {
        $('#modalMatch').removeClass("visible");
        $('#modalMatch').toggle("visible");
    },
});