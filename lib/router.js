FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout', {
            navbar: 'Navbar',
            footer: 'Footer',
        });
    }
})

FlowRouter.route('/club', {
    name: 'leClub',
    action() {
        BlazeLayout.render('MainLayout', {
            navbar: 'Navbar',
            footer: 'Footer',
            main: 'LeClub',
        });
    }
})

FlowRouter.route('/equipes', {
    name: 'lesEquipes',
    action() {
        BlazeLayout.render('MainLayout', {
            navbar: 'Navbar',
            footer: 'Footer',
            main: 'LesEquipes',
        });
    }
})

FlowRouter.route('/actualite', {
    name: 'actualite',
    action() {
        BlazeLayout.render('MainLayout', {
            navbar: 'Navbar',
            footer: 'Footer',
            main: 'Actualite',
        });
    }
})

FlowRouter.route('/partenaires', {
    name: 'partenaires',
    action() {
        BlazeLayout.render('MainLayout', {
            navbar: 'Navbar',
            footer: 'Footer',
            main: 'Partenaires',
        });
    }
})