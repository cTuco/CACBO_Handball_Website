import { Accounts } from 'meteor/accounts-base';

//connexion avec le Username
Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY",
})