import { Equipes } from '../lib/collections.js';

Template.LesEquipes.helpers({
    //DYNAMIQUE :
    equipes() {
        return Equipes.find({});
    }
});