// Meteor.subscribe('equipes'); REMPLACÉ PAR :
Template.calendrierResultats.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('equipes');
    })
})
Template.calendrierResultats.helpers({
    params() {
        //TODO : Récupérer dans la bdd les infos relatives aux équipes
        const param = FlowRouter.getParam('params');
        // var titre = '';
        // if (param === 'SG') {
        //     titre = 'Séniors Garçons';
        // }
        // if (param === 'SF') {
        //     titre = 'Séniors Filles';
        // } 
        // else {
        //     titre = param;
        // }
        // return titre;
        return param;
    },
    idEquipe() {
        const param = FlowRouter.getParam('params');
        return param;
    },

    //afficher tous les matchs de l'équipe
    matchsEquipe() {
        const param = FlowRouter.getParam('params');
        return Equipes.find({ categorie: param })
    },
});

Template.calendrierResultats.events({
    'click #btnMatch': function () {
        $('#modalMatch').addClass("visible");
        $('#modalMatch').toggle("visible");
    },
    'submit #btnMatch': function () {
        $('#modalMatch').removeClass("visible");
        $('#modalMatch').toggle("visible");
    },
    'click #annuler': function () {
        $('#modalMatch').removeClass("visible");
        $('#modalMatch').toggle("visible");
    },
    'click #modifier': function () {
        $('#modalModifierMatch').addClass("visible");
        $('#modalModifierMatch').toggle("visible");

    },
    // 'click #modalModifier': function () {
    //     $('#modalModifier').addClass("visible");
    //     $('#modalModifier').toggle("visible");
    // }

    //nouveau match
    // 'click #saveMatch': function () {
    //     //on récupère toutes les données
    //     const equipeDomicile = $('.modal-content').find('#equipeDomicileMatch').val();
    //     console.log(equipeDomicile)
    //     //TODO : Faire les autres input


    //     Meteor.call('matchs.insert', equipeDomicile);

    //     //On efface les données de la modal
    //     $('#modalMatch').removeClass("visible");
    //     $('#modalMatch').toggle("visible");
    // }
});

Template.calendrierResultats.helpers({
    updatetMatchFormId: function () {
        // const param = FlowRouter.getParam('params');
        // return Equipes.find({ categorie: param })

        const param = FlowRouter.getParam('params');
        const Equipe = Equipes.find({ categorie: param });
        let id;
        Equipe.forEach((element) => {
            id = element._id;
        });
        return id;
    },
});