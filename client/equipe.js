import { Mongo } from 'meteor/mongo';

export const Equipes = new Mongo.Collection('equipes');

Template.LesEquipes.helpers({
    //EN DUR :
    // equipes: [
    //     { niveau: '-18G' },
    //     { niveau: '-18F' },
    //     { niveau: '-15G' },
    //     { niveau: '-15F' },
    // ]

    //DYNAMIQUE :
    equipes() {
        return Equipes.find({});
    }
});

Template.LesEquipes.events({
    'submit .add-form': function () {
        event.preventDefault();

        //get input value
        const target = event.target;
        const text = target.text.value;

        //insert niveau into collection
        Equipes.insert({
            text,
            createdAt: new Date()
        })

        //clear form
        target.text.value = "";
    }
})