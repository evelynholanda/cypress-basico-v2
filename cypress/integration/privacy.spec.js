
describe('Test Police privacy with independent', () => {
    it('Test police privacy indepedent', () => {
        cy.visit('./src/privacy.html')
        cy.contains('CAC TAT - Política de privacidade')
        .should('be.visible')
    });
});


