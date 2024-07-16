describe('Test Suite-collection of tests', () => {
    it('tests', () => {
        cy.visit('http://the-internet.herokuapp.com/login')
        cy.get("input[name='username']").type('darkunde@gmail.com');
        cy.get("input[name='password']").type('xyz')
        

    });
});