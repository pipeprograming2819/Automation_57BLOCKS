describe('Sign in', () => {
    before(() => {
        cy.visit('https://github.com/login');
    });
    context('When the user enters the data', () => {
        before(() => {
            cy.get('#login_field').type('pianistapipe@outlook.es');
            cy.get('#password').type('Felipi@no1234567890');
            cy.get('.btn').click();
            cy.get('.js-feature-preview-indicator-container > .Header-link > .dropdown-caret').click();
            cy.get('.logout-form > .dropdown-item').click();
        });
        it('Next', () => {});
    });
});