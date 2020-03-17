FlowRouter.route('/', {
    name: 'layout',
    action(params) {
        renderView(<Layout />)
    }
});

function renderView(component) {
    ReactLayout.render(MainLayout, {
        header: <Header />,
        content: component,
        footer: <Footer />
    });
}