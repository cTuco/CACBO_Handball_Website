import { Equipes } from '../../lib/collections.js';

Template.lesEquipes.helpers({
    //DYNAMIQUE :
    equipes() {
        return Equipes.find({});
    }
});