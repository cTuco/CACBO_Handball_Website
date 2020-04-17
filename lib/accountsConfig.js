import { Accounts } from 'meteor/accounts-base';

//Paramétrage de la connexion : uniquement avec le login
Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY",
});