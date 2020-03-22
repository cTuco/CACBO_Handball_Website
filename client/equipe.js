Template.LesEquipes.helpers({
    //EN DUR :
    equipes: [
        { text: '-18G' },
        { text: '-18F' },
        { text: '-15G' },
        { text: '-15F' },
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