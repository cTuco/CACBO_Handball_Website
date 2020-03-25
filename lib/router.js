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
            main: 'LeClub',
        });
    }
})

FlowRouter.route('/equipes', {
    name: 'lesEquipes',
    action() {
        BlazeLayout.render('mainLayout', {
            navbar: 'navbar',
            footer: 'footer',
            main: 'LesEquipes',
        });
    }
})

FlowRouter.route('/actualite', {
    name: 'actualite',
    action() {
        BlazeLayout.render('mainLayout', {
            navbar: 'navbar',
            footer: 'footer',
            main: 'Actualite',
        });
    }
})

FlowRouter.route('/partenaires', {
    name: 'partenaires',
    action() {
        BlazeLayout.render('mainLayout', {
            navbar: 'navbar',
            footer: 'footer',
            main: 'Partenaires',
        });
    }
})

FlowRouter.route('/administration', {
    name: 'administration',
    action(params, queryParams) {
        BlazeLayout.render('mainLayout', {
            navbar: 'navbar',
            footer: 'footer',
            main: 'Administration'
        });
    }
})