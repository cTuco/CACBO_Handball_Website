import { Meteor } from 'meteor/meteor';

Template.partenairesAdmin.events({
    //ouverture et fermture des modal
    'click .btnPartenaire': function () {
        $('#modalMatch').addClass("visible");
        $('#modalMatch').toggle("visible");
    },
    // 'submit .btn-primary': function () {
    //     $('#modalMatch').removeClass("visible");
    //     $('#modalMatch').toggle("visible");
    // },
    // 'click #annuler': function () {
    //     $('#modalMatch').removeClass("visible");
    //     $('#modalMatch').toggle("visible");
    // },
});