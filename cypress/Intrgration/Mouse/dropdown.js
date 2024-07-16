describe('dropdown', () => {
    it('test1', () => {
        cy.visit('https://v1.training-support.net/selenium/drag-drop');
        cy.get('#draggable').trigger('mousedown',{which: 1});
        cy.get('#draggable').trigger('mousemove').trigger('mouseup',{force:true});
    });
});