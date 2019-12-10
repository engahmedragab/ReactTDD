describe('test cypress first test', () => {
    it('Make sure the welcome message come on ', () => {
        cy.visit('http://localhost:1234/').contains('Hallo ');
    })
})
