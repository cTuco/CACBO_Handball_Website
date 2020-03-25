import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

//FICHIERS HTML
import './templates/navbar.html';
import './templates/footer.html';
import './templates/mainLayout.html';
import './templates/homeLayout.html';
import './templates/leClub.html';
import './templates/lesEquipes.html';
import './templates/actualite.html';
import './templates/partenaires.html';
import './templates/administration.html';
import './templates/calendrier&resultats.html';

//FICHIERS JS
import '../lib/router.js';
import './equipe.js';

//connexion avec le Username
Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
})