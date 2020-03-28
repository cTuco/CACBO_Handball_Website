FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('homeLayout', {
            navbar: 'navbar',
            footer: 'footer',
        });
    }
})

FlowRouter.route('/club', {
    name: 'leClub',
    action() {
        BlazeLayout.render('mainLayout', {
            navbar: 'navbar',
            footer: 'footer',
            main: 'leClub',
        });
    }
})

FlowRouter.route('/equipes', {
    name: 'lesEquipes',
    action() {
        BlazeLayout.render('mainLayout', {
            navbar: 'navbar',
            footer: 'footer',
            main: 'lesEquipes',
        });
    }
})

FlowRouter.route('/actualite', {
    name: 'actualite',
    action() {
        BlazeLayout.render('mainLayout', {
            navbar: 'navbar',
            footer: 'footer',
            main: 'actualite',
        });
    }
})

FlowRouter.route('/partenaires', {
    name: 'partenaires',
    action() {
        BlazeLayout.render('mainLayout', {
            navbar: 'navbar',
            footer: 'footer',
            main: 'partenaires',
        });
    }
})

FlowRouter.route('/administration', {
    name: 'administration',
    action() {
        BlazeLayout.render('mainLayout', {
            navbar: 'navbar',
            footer: 'footer',
            main: 'administration'
        });
    }
})
FlowRouter.route('/administration/:params', {
    name: 'administrationParams',
    action(params) {
        BlazeLayout.render('mainLayout', {
            navbar: 'navbar',
            footer: 'footer',
            main: 'calendrierResultats',
        });
    }
})