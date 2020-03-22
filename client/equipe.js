

Template.LesEquipes.helpers({
    //EN DUR :
    equipes: [
        { text: 'Note 1' },
        { text: 'Note 2' },
        { text: 'Note 3' },
    ]

    //DYNAMIQUE :
    // notes() {
    //   return Notes.find({});
    // }
});
// Template.modal.events({
//     'submit .modal-form': function () {
//         event.preventDefault();

//         //Get input value
//         const target = event.target;
//         //target.NAME.value
//         const text = target.email.value;

//         // Notes.insert({
//         //   text,
//         //   ceratedAt: new Date(),
//         //   owner: Meteor.userId(),
//         //   username: Meteor.user().username,
//         // });

//         Meteor.call('notes.insert', text);


//         //Clear form
//         target.email.value = '';

//         //Close modal
//         $("#testModal").modal('toggle');
//     }
// });