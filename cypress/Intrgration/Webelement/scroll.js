describe('Scroll', () => {
    it('test1', () => {
        cy.visit('https://www.google.com/')
        cy.get('[title="Search"]').type('Masai{enter}')
        cy.wait(3000)
        cy.scrollTo(0,1000)
        cy.scrollTo(0,-1000)
        cy.scrollTo('bottom');
        cy.scrollTo('top');
        cy.scrollTo('center');
        cy.contains('Maasai people').scrollIntoView().wait(2000).click();
    });
});