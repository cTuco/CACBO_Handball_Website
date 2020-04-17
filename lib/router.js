import { Meteor } from 'meteor/meteor';

//si admin connecté, redirection vers page administration
if (Meteor.isClient) {
    Accounts.onLogin(function () {
        FlowRouter.go('administration');
    });
    Accounts.onLogout(function () {
        FlowRouter.go('home');
    });
};

//route accueil
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'homeLayout'
        });
    }
});

FlowRouter.route('/club', {
    name: 'leClub',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'leClub',
        });
    }
});

FlowRouter.route('/equipes', {
    name: 'lesEquipes',
    action() {
        console.log('equipe')
        BlazeLayout.render('mainLayout', {
            main: 'lesEquipes',
        });
    }
});

FlowRouter.route('/actualite', {
    name: 'actualite',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'actualite',
        });
    }
});

FlowRouter.route('/partenaires', {
    name: 'partenaires',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'partenaires',
        });
    }
});

FlowRouter.route('/administration', {
    name: 'administration',
    //empêche non admin d'accéder à Administration
    triggersEnter: [function (context, redirect) {
        if (!Meteor.userId()) {
            FlowRouter.go('home')
        }
    }],
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'administration'
        });
    }
});

FlowRouter.route('/administration/calendrier-resultats/:params', {
    name: 'administrationParams',
    //empêche non admin d'accéder à Administration
    triggersEnter: [function (context, redirect) {
        if (!Meteor.userId()) {
            FlowRouter.go('home')
        }
    }],
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'calendrierResultats',
        });
    }
});