//A la création de la page Actualité, on accède à la collection equipes
Template.actualite.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('equipes');
    });
});

//permet d'afficher les infos relatives aux équipes
Template.actualite.helpers({
    categories() {
        return Equipes.find({});
    }
});